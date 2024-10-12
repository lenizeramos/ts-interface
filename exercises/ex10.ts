interface User {
  address?: {
    street?: string;
    zipCode?: string;
  };
}

const user1: User = {
  address: { street: "547 Granville St", zipCode: "V6E9F5" },
};

console.log(user1?.address?.street);
