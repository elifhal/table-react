import React from 'react'
import { Data } from './data.js'
import './App.css';

function table() {

    return (<>
        <div className="App">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Data.map((product) => {
                            return <tr>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.unitPrice}</td>
                                <td>{product.unitsInStock}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    </>)
}

export default table