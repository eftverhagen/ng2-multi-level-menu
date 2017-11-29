export const menuStructure = [
    {id: 0, items: [ // Level 1
        {name: 'Cars', toggle: 1}, // Toggle level 2 (Toyota)
        {name: 'Clothing', toggle: 2}, // Toggle level 2 (Toyota)
    ]}, // link
    {id: 1, items: [ // Level 2
        {name: 'Aygo', route: 'Aygo'}, // Toggle level 2 (Toyota)
        {name: 'Prius', route: 'Prius'}
    ]}, // link
    {id: 2, items: [ // Level 3
        {name: 'Jeans', route: 'Jeans'}, // Toggle level 2 (Toyota)
        {name: 'Sweater', route: 'Sweater'} // link
    ]}

];