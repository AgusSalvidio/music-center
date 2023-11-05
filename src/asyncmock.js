const items = [
  {
    id: "1500000274103",
    categoryId: "1",
    name: "Gibson SG Standard Ebony",
    image:
      "https://media.guitarcenter.com/is/image/MMGS7/L54573000002000-00-2000x2000.jpg",
    price: "$1,799.00",
    stock: "5",
    title: "Back in Black…and Heritage Cherry!",
    description:
      "The Gibson SG Standard rocks the classic looks and features associated with the late 60s style SG™ models sought after by many. A rounded profile mahogany neck, bound rosewood fingerboard, long tenon 19th fret neck joint, and a solid mahogany body provide the backbone for singing sustain. The 490R and 490T Alnico 2 pickups provide the power to drive. A black, 5-ply, full-face pickguard set this SG Standard apart from others... a truly versatile classic.",
  },
  {
    id: "1500000404907",
    categoryId: "1",
    name: "Gibson Les Paul Standard '50s Figured Top Electric Guitar 60s Cherry",
    image:
      "https://media.guitarcenter.com/is/image/MMGS7/L54575000005000-00-600x600.jpg",
    price: "$2,999.00",
    stock: "5",
    title: "A Classic Reborn for Today's Player",
    description:
      "The Gibson Les Paul Standard '50s Figured Top electric guitar serves up vintage-inspired tone and looks. This solidbody stunner features a figured maple top on a mahogany back, just like the original. Its rounded '50s neck profile and trapezoid inlays evoke the era that shaped rock and roll. The Les Paul Standard '50s is ready to inspire you.",
  },
  {
    id: "1500000331137",
    categoryId: "1",
    name: "Fender American Professional II Telecaster Maple Fingerboard Electric Guitar Butterscotch Blonde",
    image:
      "https://media.guitarcenter.com/is/image/MMGS7/L78119000004000-00-600x600.jpg",
    price: "$1,799.00",
    stock: "5",
    title: "Fast-Playing Maple Neck",
    description:
      "The Fender American Professional II Telecaster maple fingerboard electric guitar is the latest evolution of an iconic instrument. Fender has upgraded and improved their flagship Telecaster to meet the demands of today's professional guitarist. New V-Mod II Telecaster single-coil pickups provide the crisp tone that Telecasters are known for, with greater articulation and clarity. The satin-finished maple neck and narrow-tall frets make this an exceptionally comfortable and fast guitar to play.",
  },
  {
    id: "1500000005255",
    categoryId: "1",
    name: "Gretsch Guitars G6136T-59 Vintage Select Edition '59 Falcon Hollowbody With Bigsby Vintage White",
    image:
      "https://media.guitarcenter.com/is/image/MMGS7/J32895000001000-00-600x600.jpg",
    price: "$3,999.99",
    stock: "5",
    title: "Period-Correct Specs Channel the Golden Age",
    description:
      "Gretsch's G6136T-59GE Golden Era Edition 1959 White Falcon Hollow Body Electric Guitar is a masterclass in retro style and sonic finesse. This rare bird comes alive in the hands of any player, delivering its distinctive warm and articulate voice at every strum.",
  },
  {
    id: "1500000408214",
    categoryId: "2",
    name: "Fender Tone Master FR-12 1,000W 1x12 FRFR Powered Speaker Cab Black",
    image:
      "https://media.guitarcenter.com/is/image/MMGS7/M05115000001000-00-600x600.jpg",
    price: "$549.99",
    stock: "5",
    title: "Fender Tone Master",
    description:
      "The Fender Tone Master FR-12 is a full-range, flat response powered speaker cab designed for use with today’s digital guitar amp modelers and profilers. The FR-12 perfectly replicates every detail of your amp simulations and are the ideal solution for players who use modelers at home or on stage. The Tone Master FR-12 feature an integrated 1,000-watt power amp that delivers the volume and headroom needed for even the most demanding live performance. Other features include a 3-band active EQ and high-frequency cut control to allow players to fine tune their stage tone without altering what is sent to the PA. Plus, the FR-12 industrial design is 100% Fender for an authentic backline look and feel.",
  },
  {
    id: "1500000183867",
    categoryId: "2",
    name: "Marshall DSL20CR 20W 1x12 Tube Guitar Combo Amp",
    image:
      "https://media.guitarcenter.com/is/image/MMGS7/K64637000000000-00-600x600.jpg",
    price: "$799.99",
    stock: "5",
    title: "Marshall DSL20CR",
    description:
      "The Marshall DSL20CR combo amplifier delivers 20 watts of pure valve tone in a portable package. This all-tube, twin-channel amp offers Marshall's revered Classic Gain and Ultra Gain voicings, allowing guitarists to summon crisp clean tones, vintage overdrive, and modern high-gain saturation. With high and low power modes, the DSL20CR provides appropriate volume for any setting—from home practice to club gigs. The DSL20CR features an innovative emulated speaker output, which accurately reproduces the sound of Marshall's legendary 1960 cabinet for direct recording or silent practice.",
  },
  {
    id: "1274034482466",
    categoryId: "2",
    name: "VOX Custom AC15C1 15W 1x12 Tube Guitar Combo Amp Vintage",
    image:
      "https://media.guitarcenter.com/is/image/MMGS7/423619000001000-00-600x600.jpg",
    price: "$799.99",
    stock: "5",
    title: "VOX Custom AC15C1",
    description:
      "VOX Custom amps offer two channels: Normal and Top Boost. Each channel is equipped with its own Volume control, and the Top Boost channel offers highly interactive Treble and Bass tone controls. This powerful channel pairing provides an abundance of tone-crafting control, letting you dial in a classic sound that is all your own.",
  },
  {
    id: "1434984072848",
    categoryId: "2",
    name: "Roland JC-40 40W 2x10 Jazz Chorus Guitar Combo Amp",
    image:
      "https://media.guitarcenter.com/is/image/MMGS7/J24857000000000-00-600x600.jpg",
    price: "$699.99",
    stock: "5",
    title: "Roland JC-40",
    description: `he Roland JC-40 Jazz Chorus combo amplifier is a 40-watt, 2x10" stereo combo delivers Roland's renowned "JC clean" tone and signature Dimensional Space Chorus effect in a scaled-down design ideal for gigging and rehearsing. Like the legendary JC-120, the JC-40 serves up punchy, spacious sound through two independent power amps and custom speakers. Its durable, road-tested build ensures years of reliability on stage and in the studio.`,
  },
  {
    id: "1274034492388",
    categoryId: "3",
    name: "BOSS DS-1 Distortion Pedal",
    image:
      "https://media.guitarcenter.com/is/image/MMGS7/151258000000000-00-600x600.jpg",
    price: "$62.99",
    stock: "10",
    title: "BOSS DS-1",
    description:
      "For over 30 years, the BOSS DS-1 Distortion pedal has been the go-to stompbox for guitarists seeking a bold, crunchy tone. This legendary effect pedal continues to inspire legions of musicians with its affordable, road-tough design and dynamite sound. Whether you play a single-coil or humbucker-equipped guitar, the DS-1 delivers rich, full-bodied distortion that complements your personal technique and playing style.",
  },
  {
    id: "1274228081981",
    categoryId: "3",
    name: "Dunlop Original Cry Baby Wah Effects Pedal",
    image:
      "https://media.guitarcenter.com/is/image/MMGS7/151000000000000-00-600x600.jpg",
    price: "$99.99",
    stock: "10",
    title: "Dunlop Original Cry Baby",
    description:
      "The Dunlop Original Cry Baby Wah is the iconic stompbox that shaped the sound of rock. Since 1966, the Cry Baby Wah has been essential gear for influential guitarists like Jimi Hendrix, Eric Clapton and countless others. Now you can dial in those timeless wah tones and make them your own. With a heavy-duty die-cast housing and road-tested components, the Cry Baby Wah is built to inspire on stage and in the studio for years to come.",
  },
  {
    id: "1500000386851",
    categoryId: "3",
    name: "GAMMA Hades Metal Distortion Effects Pedal",
    image:
      "https://media.guitarcenter.com/is/image/MMGS7/L98279000000000-00-600x600.jpg",
    price: "$79.99",
    stock: "10",
    title: "GAMMA Hades Metal Distortion",
    description:
      "The GAMMA Hades Metal Distortion erupts out of the underworld to provide extreme guitarists with all of the vicious, barbarous impact they crave. This is the perfect distortion pedal for parts that need to roar out of a band mix and shock listeners’ ears into joyful submission. Hades is one of six stompboxes in our brand-new and exclusive GAMMA guitar effects pedals line—which also includes the Altas Boosted Overdrive, Bacchus Dynamic Driver, Cumulus 3-Way Reverb, Eros Clean Chorus and Narcissus Warm Delay. We’re Guitar Center, and we know guitar players, so we populated the GAMMA line with six effects that are absolutely essential for gigging. In fact, you can construct a versatile and professional pedalboard with the sextet of GAMMA pedals alone.",
  },
  {
    id: "1434984072870",
    categoryId: "3",
    name: "BOSS RV-6 Digital Delay/Reverb Guitar Effects Pedal",
    image:
      "https://media.guitarcenter.com/is/image/MMGS7/J24859000000000-00-600x600.jpg",
    price: "$149.99",
    stock: "10",
    title: "BOSS RV-6 Digital Delay/Reverb",
    description:
      "The RV-6 digital reverb pedal from provides guitarists an easy way to add depth, dimension and drama to their tone. Packed with eight meticulously crafted reverb algorithms, from small rooms to cavernous halls to vintage spring emulations and more, the RV-6 envelops your tone in lush, ambient spaces. While its effects are digital, your core tone always remains pure analog thanks to an all-analog dry signal path.",
  },
  {
    id: "1273887998719",
    categoryId: "4",
    name: "Ernie Ball Regular Slinky 2221 (10-46) Nickel Wound Electric Guitar Strings",
    image:
      "https://media.guitarcenter.com/is/image/MMGS7/100622000000000-00-600x600.jpg",
    price: "$6.99",
    stock: "10",
    title: "Ernie Ball Regular Slinky",
    description:
      "The Ernie Ball Regular Slinky 2221 (10-46) Nickel Wound electric guitar strings have garnered an esteemed reputation with guitarists all around the world for a reason. An industry standard for guitar strings, no matter what you're playing on—regular Slinkys always manage to bring out the integrity of your guitar’s sound. With long-lasting durability and excellent bendability, these strings help to balance out your guitar acoustics for an even and rich tone.",
  },
  {
    id: "1274115039650",
    categoryId: "4",
    name: "Musician's Gear Deluxe Electric Guitar Case Tweed",
    image:
      "https://media.guitarcenter.com/is/image/MMGS7/540948000389000-00-600x600.jpg",
    price: "$119.99",
    stock: "10",
    title: "Deluxe Electric Guitar Case Tweed",
    description:
      "This Musician's Gear Deluxe electric case was built to be road-tough, so you can protect your favorite axe when you're on the go. Constructed of 5-ply cross-laminate wood, it has a plush interior lining to keep your baby's finish safe and sound. It also has heavy-duty hardware to protect the case from accidental dings while three locking fasteners keep your guitar from any accidental opening for when you're en route to your gig or practice.",
  },
  {
    id: "1500000341757",
    categoryId: "4",
    name: "Fender 351 Premium Celluloid Guitar Picks 12-Pack Blue Moto X-Heavy",
    image:
      "https://media.guitarcenter.com/is/image/MMGS7/110556000004001-00-600x600.jpg",
    price: "$4.99",
    stock: "10",
    title: "Fender 351 Premium Celluloid Guitar Picks",
    description:
      "Fender's most popular and iconic pick shape is now available in an eye-catching new color, with the same premium celluloid material that provides a warm, balanced tone and comfortable feel. Whether you're a beginner looking for your first picks or a seasoned pro stocking up on an essential, the 351 White Moto picks are a stylish and sonically satisfying choice for players of all styles.",
  },
  {
    id: "1500000261753",
    categoryId: "4",
    name: "Fender Deluxe Series Straight to Straight Instrument Cable 5 ft. Yellow Tweed",
    image:
      "https://media.guitarcenter.com/is/image/MMGS7/L47910000001002-00-600x600.jpg",
    price: "$27.99",
    stock: "10",
    title: "Fender Deluxe Series",
    description:
      "The Fender Deluxe Series straight to straight instrument cable provides musicians with a durable, high-performance cable for connecting their instruments to amps, pedalboards and more. Constructed with oxygen free copper conductors and a dual foil shield, this 10' cable delivers a transparent tone with no hum or interference. The cable's yellow tweed jacket pays tribute to Fender's iconic amps while also protecting the cable from damage.",
  },
];

const getItems = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(items);
    }, 100);
  });
};

const getItemIdentifiedBy = (anId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const foundItem = items.find((item) => item.id === anId);
      resolve(foundItem);
    }, 100);
  });
};

const getItemsCategorizedBy = (aCategoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredItems = items.filter(
        (item) => item.categoryId === aCategoryId
      );
      resolve(filteredItems);
    }, 100);
  });
};

export { getItems, getItemIdentifiedBy, getItemsCategorizedBy };
