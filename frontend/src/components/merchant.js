import { useEffect } from "react";
import {Wrapper} from "./wrapper";

export const Merchants = () => {

    return (
        <Wrapper>
            <div class="table-responsive">
                <table class="table table-striped table-sm">

                    <thead>
                        <tr>
                            <th scope="col">Merchant Code</th>
                            <th scope="col">Merchant Name</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td>tmp_a</td>
                            <td>tmp_b</td>
                            <td>
                                <a href="#" className="btn btn-sm btn-outline-secondary">Delete</a>
                            </td>
                        </tr>


                    </tbody>
                </table>
            </div>
        </Wrapper>
    )   
}