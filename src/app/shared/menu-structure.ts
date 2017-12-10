export const structure = [
    {id: 0, items: [ // Level 1
        {name: 'Clothing', toggle: 1}, // Toggle level 2
        {name: 'Cars', toggle: 3}, // Toggle level 3
    ]}, // link
    {id: 1, items: [ // Level 2
        {name: 'Jeans', toggle: 2}, // Toggle level 2 (Toyota)
        {name: 'Sweater', route: 'Sweater'} // link
    ]},
    {id: 2, items: [ // Level 3
        {name: 'Levis', route: 'Levis'}, // Toggle level 2 (Toyota)
        {name: 'Wrangler', route: 'Wrangler'} // link
    ]},
    {id: 3, items: [ // Level 3
        {name: 'Audi', route: 'Audi'}, // Toggle level 2 (Toyota)
        {name: 'Volkswagen', route: 'Volkswagen'} // link
    ]}

];