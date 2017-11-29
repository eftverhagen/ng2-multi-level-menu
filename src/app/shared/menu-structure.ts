export const menuStructure = [
    [{name: 'Cars'},{name: 'Devices'}, {name: 'Clothing'}], // 0  : 0, 1
    [{name: 'Audi'},{name: 'Toyota', link: '/toyota'}], // 1 : 0, 1
    [{name: 'Laptop'},{name: 'Tablet'}], // 2 : 0, 1
    [{name: 'Jeans'},{name: 'Sweater'}] // 3 : 0, 1
];


export const menuStructure2 = [
    {name: 'Cars', items: [ // Level 1
        {name: 'Toyota',}, // Toggle level 2 (Toyota)
        {name: 'Contact', route: 'contact'}]}, // link
    {name: 'Toyota', active: false, items: [ // Level 2
        {name: 'Aygo', route: 'Aygo'}, // Toggle level 2 (Toyota)
        {name: 'Prius', route: 'Prius'}]}, // link
];

// Level 1
//  - toggle Level 2
//  - link
// Level 2
//  - toggle Level 3
//  - link
//  - link
// Level 3
//  - link
//  - link
