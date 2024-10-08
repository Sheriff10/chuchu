import React from 'react'

export default function Tokenomics() {
    return (
        <div className="wrap relative py-16">
            <div className="container mx-auto">
                <img src="/asset/hi.png" alt="Hey Nugget" className='absolute right-0 w-[500px] hidden lg:block' />
                <div className="header lg:text-6xl text-5xl font-bold lg:w-1/2">
                    <h1><span className='text-amber-900 font-jumb'>Nugg</span>inomics</h1>
                    <div className="wrap relative z-10 font-bold text-2xl mt-5">
                        <p>Total Supply: 50 Billion</p>
                        <p className='text-amber-900'>Mint Revoked / Freeze Revoked / LP Burned</p>
                        <p>0% Tax</p>
                        <p>40% LP</p>
                        <p>40% Community Airdrop</p>
                        <p>10% Team</p>
                        <p>10% CEX/Marketing</p>
                        <p>CA: Coming soon</p>
                    </div>
                </div>

                <div className="header text-6xl text-center font-bold bg-neutral-900 text-white py-10 mt-3">
                    <h1><span className='text-amber-900 font-jumb'>Nugg</span>Map</h1>
                    <span className="text-3xl">No road map, just being cute 🥺🥺</span>
                </div>
            </div>
        </div>
    );
}
