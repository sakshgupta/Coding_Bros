import React from 'react'
import AllPlans from "./all_plans.json";

function pricing_cards() {
    return (
        <div class="demo">
            <div class="container-fluid-pricing">
                <div class="row text-center">
                    <h1 class="heading-title">Pricing</h1>
                </div>

                <div class="row">
                    {
                        AllPlans.map((rec, key) => {
                            return (
                                <div class="col-md-4 col-sm-6">
                                    <div class="pricingTable">
                                        <div class="pricingTable-header">
                                            <h3 class="pricing_heading">{rec.name}</h3>
                                            <div class="price-value">{rec.main_price}
                                                <span class="currency">₹</span>
                                            </div>
                                        </div>
                                        {
                                            rec.features.map((feature) => {
                                                return (
                                                    <ul class="pricing-content">
                                                        <li>{feature}</li>
                                                    </ul>
                                                );
                                            })
                                        }
                                        <a href="#" class="read">sign up<i class="fa fa-angle-right"></i></a>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default pricing_cards