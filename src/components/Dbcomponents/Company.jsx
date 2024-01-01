import React from 'react'

export function Company() {


    return (
        <>
            <motion.div
                whileHover="hover"
                initial="hidden"
                animate="visible"
                custom={index}
                variants={variants}
                className="h-[400px] w-[250px] rounded-lg fill-"
                key={d.cityName}
                style={{ backgroundImage: `url(${cityImages[d.cityName][0]})`, backgroundSize: "cover" }}

            >
                <div className="h-[200px] w-[250px]">
                    <motion.div className="px-2 py-4">
                        <h3 className='text-2xl text-white font-semibold'>{d.cityName}</h3>
                    </motion.div>
                </div>
                <motion.div className="h-[200px] w-[250px] flex items-center justify-between">
                    <div className="h-[200px] w-[250px] px-2 flex justify-between items-end py-4">
                        <button
                            onClick={() => handleShowMore(d)}
                            className='bg-blue-50 text-black border-transperent py-1 px-2 opacity-50 hover:opacity-100 rounded font-semibold hover:bg-transparent hover:text-blue-50 hover:border-blue-50 border'
                        >
                            Show More
                        </button>
                        <button className='bg-transparent hover:bg-blue-50 hover:text-black hover:opacity-70 text-blue-50 font-semibold py-1 px-2 border border-blue-50 rounded'>
                            Add plan
                        </button>
                    </div>
                </motion.div>
            </motion.div>
        </>
    )
}
