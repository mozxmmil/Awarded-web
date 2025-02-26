export interface WorkImage {
  id: number;
  image: string;
  top: string;
  left: string;
  isActive: boolean;
}

export const workImage: WorkImage[] = [
  {
    id: 0,
    image:
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vcmRlcm4lMjBjaXR5JTIwd2l0aCUyMG5pZ2h0fGVufDB8fDB8fHww",
    top: "50%",
    left: "40%",
    isActive: false,
  },
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vcmRlcm4lMjBjaXR5JTIwd2l0aCUyMG5pZ2h0fGVufDB8fDB8fHww",
    top: "30%",
    left: "50%",
    isActive: false,
  },
  {
    id: 2,
    image:
      "https://plus.unsplash.com/premium_photo-1664392543043-91b0c3686c7b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9yZGVybiUyMGNpdHklMjB3aXRoJTIwbmlnaHR8ZW58MHx8MHx8fDA%3D",

    top: "60%",
    left: "48%",
    isActive: false,
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1427694012323-fb5e8b0c165b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vcmRlcm4lMjBjaXR5JTIwd2l0aCUyMG5pZ2h0fGVufDB8fDB8fHww",

    top: "48%",
    left: "60%",
    isActive: false,
  },
];
