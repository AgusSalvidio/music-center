const items = [
  {
    id: "1500000274103",
    name: "Gibson SG Standard Ebony",
    image:
      "https://media.guitarcenter.com/is/image/MMGS7/L54573000002000-00-2000x2000.jpg",
    price: "$1,799.00",
    description: {
      title: "Back in Black…and Heritage Cherry!",
      body: "The Gibson SG Standard rocks the classic looks and features associated with the late 60s style SG™ models sought after by many. A rounded profile mahogany neck, bound rosewood fingerboard, long tenon 19th fret neck joint, and a solid mahogany body provide the backbone for singing sustain. The 490R and 490T Alnico 2 pickups provide the power to drive. A black, 5-ply, full-face pickguard set this SG Standard apart from others... a truly versatile classic.",
    },
  },
  {
    id: "1500000404907",
    name: "Gibson Les Paul Standard '50s Figured Top Electric Guitar 60s Cherry",
    image:
      "https://media.guitarcenter.com/is/image/MMGS7/L54575000005000-00-600x600.jpg",
    price: "$2,999.00",
    description: {
      title: "A Classic Reborn for Today's Player",
      body: "The Gibson Les Paul Standard '50s Figured Top electric guitar serves up vintage-inspired tone and looks. This solidbody stunner features a figured maple top on a mahogany back, just like the original. Its rounded '50s neck profile and trapezoid inlays evoke the era that shaped rock and roll. The Les Paul Standard '50s is ready to inspire you.",
    },
  },
  {
    id: "1500000331137",
    name: "Fender American Professional II Telecaster Maple Fingerboard Electric Guitar Butterscotch Blonde",
    image:
      "https://media.guitarcenter.com/is/image/MMGS7/L78119000004000-00-600x600.jpg",
    price: "$1,799.00",
    description: {
      title: "Fast-Playing Maple Neck",
      body: "The Fender American Professional II Telecaster maple fingerboard electric guitar is the latest evolution of an iconic instrument. Fender has upgraded and improved their flagship Telecaster to meet the demands of today's professional guitarist. New V-Mod II Telecaster single-coil pickups provide the crisp tone that Telecasters are known for, with greater articulation and clarity. The satin-finished maple neck and narrow-tall frets make this an exceptionally comfortable and fast guitar to play.",
    },
  },
  {
    id: "1500000005255",
    name: "Gretsch Guitars G6136T-59 Vintage Select Edition '59 Falcon Hollowbody With Bigsby Vintage White",
    image:
      "https://media.guitarcenter.com/is/image/MMGS7/J32895000001000-00-600x600.jpg",
    price: "$3,999.99",
    description: {
      title: "Period-Correct Specs Channel the Golden Age",
      body: "Gretsch's G6136T-59GE Golden Era Edition 1959 White Falcon Hollow Body Electric Guitar is a masterclass in retro style and sonic finesse. This rare bird comes alive in the hands of any player, delivering its distinctive warm and articulate voice at every strum.",
    },
  },
];

const getItems = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(items);
    }, 1500);
  });
};

export { getItems };
