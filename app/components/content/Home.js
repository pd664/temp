import React from 'react'
import SellMore from './SellMore'
import SuperCharge from './SuperCharge'
import Powerful from './Powerful'
import B2Bbuyer from './B2Bbuyer'
import CommerceCopilots from './CommerceCopilots'
import ControlCenter from './ControlCenter'
import Pricing from './pricing/Pricing'
import Faq from './faq/Faq'
function Home() {
  return (
    <div>
        <SellMore />
        <SuperCharge />
        <Powerful />
        <B2Bbuyer />
        <CommerceCopilots />
        <ControlCenter />
        <Pricing />
        <Faq />
    </div>
  )
}

export default Home