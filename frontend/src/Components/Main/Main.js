import React from "react";
import { useState, useEffect } from "react";
import {
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    TablePagination
} from "@material-ui/core";
import "./Main.css";
import { Container } from "../Container/Container";
import axios from "axios";
import Swal2 from "sweetalert2";
import { BACKEND_HOST, BACKEND_PORT } from "../../config";
import Receipt from "../Receipt/Receipt";

const Main = () => {
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [page, setPage] = useState(0);
    const [open, setOpen] = useState(false);
    const [orderShow, setOrderShow] = useState({});
    const [orders, setOrders] = useState([]);

    useEffect( () => {
        (async () =>{
            try {
                const response = await axios({
                    method: "get",
                    url: `http://${BACKEND_HOST}:${BACKEND_PORT}/tickets/`
                });
                if (response.status === 200) {
                    if(response.data && response.data.length > 0){
                        setOrders(() => response.data);
                    }else {
                        throw new Error("Sorry, no tickets are available to view at this time");
                    }
                } else {
                    throw new Error("Error getting the orders");
                }
            } catch (e) {
                console.log(e);
                Swal2.fire({
                    icon: "error",
                    title: "Oops...",
                    text: e
                });
            }
        })()
    }, []);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const setOpenOptions = () => {
        setOpen(prevState => {
            return !prevState;
        });
    };

    const viewCustomer = order => {
        setOrderShow(() => order);
        setOpenOptions();
    };

    return (
        <main className="TRestaurant-page">
            {open && (
                <Receipt
                    setOptions={setOpenOptions}
                    order={orderShow}
                />
            )}
            <Container>
                <main className="TdMain">
                    <Table className="TdMain">
                        <TableHead>
                            <TableRow>
                                <TableCell className="px-0">Ticket ID</TableCell>
                                <TableCell className="px-0">Subject</TableCell>
                                <TableCell className="px-0">Created at</TableCell>
                                <TableCell className="px-0">Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {orders
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((order, index) => {
                                    return (
                                        <TableRow key={index} style={{ cursor: "pointer", color: "black" }}
                                                  onClick={() => viewCustomer(order)}>
                                            <TableCell
                                                className="px-01"
                                            >
                                                {order.id}
                                            </TableCell>
                                            <TableCell
                                                className="px-01"
                                            >
                                                <p>
                                                    {order.subject}
                                                </p>
                                            </TableCell>
                                            <TableCell className="px-01">
                                                {new Date(order.created_at).toDateString()}
                                            </TableCell>
                                            <TableCell className="px-01">
                                                {order.status}
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>

                    <TablePagination
                        className="px-4"
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={orders.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        backIconButtonProps={{
                            "aria-label": "Previous Page"
                        }}
                        nextIconButtonProps={{
                            "aria-label": "Next Page"
                        }}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </main>
            </Container>
        </main>
    );
};

export default Main;