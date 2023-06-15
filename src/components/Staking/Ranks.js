import React from 'react';
import './staking.scss';
import pepe from '../../Assets/pepe.svg';
import pepePlus from '../../Assets/pepePlus.svg';
import pepeKing from '../../Assets/pepeKing.svg';
import whalePepe from '../../Assets/whalePepe.svg';

const Ranks = () => {
    return (
        <div className='ranks-wrapper'>
            <div className='table-wrapper-comp'>
                <div className='table-responsive'>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col" className='green-pepe'>
                                    <img src={pepe} alt='pepe' />
                                    <h6>Pepe</h6>
                                </th>
                                <th scope="col" className='pepePlus'>
                                    <img src={pepePlus} alt='pepePlus' />
                                    <h6>Pepe+</h6>
                                </th>
                                <th scope="col" className='pepeKing'>
                                    <img src={pepeKing} alt='pepeKing' />
                                    <h6>king pepe</h6>
                                </th>
                                <th scope="col" className='whalePepe'>
                                    <img src={whalePepe} alt='whalePepe' />
                                    <h6>whale pepe</h6>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">$LAU Required</th>
                                <td>Min 1,000 $LAU</td>
                                <td>Min 10,000 $LAU</td>
                                <td>Min 100,000 $LAU</td>
                                <td>Min 1,000,000 $LAU</td>
                            </tr>
                            <tr>
                                <th scope="row">Winner Selection</th>
                                <td>Lottery</td>
                                <td>Lottery</td>
                                <td>Lottery</td>
                                <td>Lottery</td>
                            </tr>
                            <tr>
                                <th scope="row">Max Individual Allocation</th>
                                <td>$100</td>
                                <td>$100</td>
                                <td>$100</td>
                                <td>$100</td>
                            </tr>
                            <tr>
                                <th scope="row">Withdrawal Delay</th>
                                <td>4 Days</td>
                                <td>8 Days</td>
                                <td>12 Days</td>
                                <td>30 Days</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Ranks