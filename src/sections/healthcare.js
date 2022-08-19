import React from 'react'
import HealthForm from '../components/health_form'
import PricingCards from '../components/pricing_cards'

function healthcare() {
    return (
        <div>
            <a className="back_btn" href="/">
                <i class="fa-solid fa-arrow-left fa-2x"></i>
            </a>
            <HealthForm />
            <PricingCards />
        </div>
    )
}

export default healthcare;