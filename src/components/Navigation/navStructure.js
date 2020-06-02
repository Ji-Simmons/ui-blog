export default [
    {
        label: 'Login',
        route: '/Login',
    },
    {
        label: 'Home',
        route: '/Home',
    },
    {
        label: 'Blog',
        route: '/Blog',
    },
    {
        label: 'About Us',
        route: '/AboutUs',
    },
    {
        label: 'M/V Snowdrift',
        children: [
            {
                label: 'Specs',
                route: '/Specs',
            },
            {
                label: 'Pictures',
                route: '/Pictures',
            },
            {
                label: 'Performance',
                route: '/Performance',
            }
        ]
    },
    {
        label: 'Our Gear',
        route: '/Gear',
    } 
    
]