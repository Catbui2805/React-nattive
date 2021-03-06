interface Banner {
    id: number;
    title: string;
    desc: string;
    image: string;
}

//mock data Banner
const banners: Banner[] = [
    {
        id: 1,
        title: '1',
        desc: 'Banner demo',
        image: 'http://tutofox.com/foodapp//banner/banner-1.jpg',
    },
    {
        id: 2,
        title: '2',
        desc: 'Banner demo2',
        image: 'http://tutofox.com/foodapp//banner/banner-2.jpg',
    },
    {
        id: 3,
        title: '3',
        desc: 'Banner demo3',
        image: 'http://tutofox.com/foodapp//banner/banner-3.png',
    }
]

export {Banner, banners};