const hotels = [
  {
    id: 12,
    name: "Dubai",
    image:
      "https://th.bing.com/th/id/R.ed041b61d80635960008bb44b178d590?rik=l6qdGZrAUfcAzA&pid=ImgRaw&r=0",
    otherImages: [
      "https://stockphoto.com/samples/MDc1Mzg0MDcxMDAxMWY1YmNmYjBlZA==/MjIxMWY1YmNmYjBlZA==/living-room-interior.jpg&size=1024",
      "https://stockphoto.com/samples/MTE3NzQ0MDUwMDAxMWY1YmNmYjBlZA==/MjIxMWY1YmNmYjBlZA==/bright-hotel-room-interior.jpg&size=1024",
      "https://stockphoto.com/samples/ODUyMDY2MzcxMDAxMWY1YmNmYjBlZA==/NDI1NTFmNWJjZmIwZWQ=/rolled-towels-and-bathrobe-on-bed.jpg&size=1024",
      "https://stockphoto.com/samples/NDIwMTQxMTAxMDAxMWY1YmNmYjBlZA==/OTM3NDExZjViY2ZiMGVk/entering-hotel-room.jpg&size=1024",
    ],
    price: 2300,
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    rating: "Excellent",
    star: 4.6,
    location: "Lagos State",
    address: "Block 12, House No 13B Fashore Osborne Estate, Okoyi",
    isFavorite: true,
  },
  {
    id: 122,
    name: "Dubai",
    image:
      "https://th.bing.com/th/id/R.ed041b61d80635960008bb44b178d590?rik=l6qdGZrAUfcAzA&pid=ImgRaw&r=0",
    otherImages: [
      "https://stockphoto.com/samples/MDc1Mzg0MDcxMDAxMWY1YmNmYjBlZA==/MjIxMWY1YmNmYjBlZA==/living-room-interior.jpg&size=1024",
      "https://stockphoto.com/samples/MTE3NzQ0MDUwMDAxMWY1YmNmYjBlZA==/MjIxMWY1YmNmYjBlZA==/bright-hotel-room-interior.jpg&size=1024",
      "https://stockphoto.com/samples/ODUyMDY2MzcxMDAxMWY1YmNmYjBlZA==/NDI1NTFmNWJjZmIwZWQ=/rolled-towels-and-bathrobe-on-bed.jpg&size=1024",
      "https://stockphoto.com/samples/NDIwMTQxMTAxMDAxMWY1YmNmYjBlZA==/OTM3NDExZjViY2ZiMGVk/entering-hotel-room.jpg&size=1024",
    ],
    price: 2300,
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    rating: "Excellent",
    star: 4.6,
    location: "Lagos State",
    address: "Block 12, House No 13B Fashore Osborne Estate, Okoyi",
    isFavorite: false,
  },
  {
    id: 121,
    name: "Dubai",
    image:
      "https://th.bing.com/th/id/R.ed041b61d80635960008bb44b178d590?rik=l6qdGZrAUfcAzA&pid=ImgRaw&r=0",
    otherImages: [
      "https://stockphoto.com/samples/MDc1Mzg0MDcxMDAxMWY1YmNmYjBlZA==/MjIxMWY1YmNmYjBlZA==/living-room-interior.jpg&size=1024",
      "https://stockphoto.com/samples/MTE3NzQ0MDUwMDAxMWY1YmNmYjBlZA==/MjIxMWY1YmNmYjBlZA==/bright-hotel-room-interior.jpg&size=1024",
      "https://stockphoto.com/samples/ODUyMDY2MzcxMDAxMWY1YmNmYjBlZA==/NDI1NTFmNWJjZmIwZWQ=/rolled-towels-and-bathrobe-on-bed.jpg&size=1024",
      "https://stockphoto.com/samples/NDIwMTQxMTAxMDAxMWY1YmNmYjBlZA==/OTM3NDExZjViY2ZiMGVk/entering-hotel-room.jpg&size=1024",
    ],
    price: 2300,
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    rating: "Excellent",
    star: 4.6,
    location: "Lagos State",
    address: "Block 12, House No 13B Fashore Osborne Estate, Okoyi",
    isFavorite: true,
  },
  {
    id: 123,
    name: "Dubai",
    image:
      "https://th.bing.com/th/id/R.ed041b61d80635960008bb44b178d590?rik=l6qdGZrAUfcAzA&pid=ImgRaw&r=0",
    otherImages: [
      "https://stockphoto.com/samples/MDc1Mzg0MDcxMDAxMWY1YmNmYjBlZA==/MjIxMWY1YmNmYjBlZA==/living-room-interior.jpg&size=1024",
      "https://stockphoto.com/samples/MTE3NzQ0MDUwMDAxMWY1YmNmYjBlZA==/MjIxMWY1YmNmYjBlZA==/bright-hotel-room-interior.jpg&size=1024",
      "https://stockphoto.com/samples/ODUyMDY2MzcxMDAxMWY1YmNmYjBlZA==/NDI1NTFmNWJjZmIwZWQ=/rolled-towels-and-bathrobe-on-bed.jpg&size=1024",
      "https://stockphoto.com/samples/NDIwMTQxMTAxMDAxMWY1YmNmYjBlZA==/OTM3NDExZjViY2ZiMGVk/entering-hotel-room.jpg&size=1024",
    ],
    price: 2300,
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    rating: "Excellent",
    star: 4.6,
    location: "Lagos State",
    address: "Block 12, House No 13B Fashore Osborne Estate, Okoyi",
    isFavorite: false,
  },
];
export { hotels };
