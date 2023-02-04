//convert timestamp
function convertToTimestamp(date) {
  console.log(date);
  let day = new Date(date);
  console.log("day: ", day);
  return {
    seconds: day.getTime() / 1000,
    nanos: 0,
  };
}
convertToTimestamp("3");
// Function to convert the internal data types to the external data types
function convertToExternalDataTypes(chat) {
  let extChat = {
    Title: chat.title,
    ChatItems: [],
  };
  chat.nodesList.forEach((item) => {
    let extNode = {
      FirstName: item.firstName,
      LastName: item.lastName,
      Age: item.age,
      BirthDate: convertToTimestamp(item.birthDate),
      ShoppingItems: [],
    };
    item.shoppingItemsList.forEach((shoppingItem) => {
      let extShoppingItem = {
        Title: shoppingItem.title,
        Price: shoppingItem.price,
        Currency: shoppingItem.currency,
        Date: convertToTimestamp(shoppingItem.date),
      };
      extNode.ShoppingItems.push(extShoppingItem);
    });
    extChat.ChatItems.push(extNode);
  });
  return extChat;
}
// Sample data with internal types
let chat = {
  title: "Hello Oven",
  nodesList: [
    {
      firstName: "Tran",
      lastName: "Thien",
      age: 25,
      birthDate: "1998-10-28",
      shoppingItemsList: [
        {
          title: "TShirt",
          price: 20000,
          currency: "VNĐ",
          date: "2022-02-3",
        },
        {
          title: "Pants",
          price: 16000,
          currency: "VNĐ",
          date: "2023-02-04",
        },
      ],
    },
    {
      firstName: "Jane",
      lastName: "Doe",
      age: 31,
      birthDate: "1989-07-20",
      shoppingItemsList: [
        {
          title: "Dress",
          price: 40,
          currency: "USD",
          date: "2022-10-01",
        },
        {
          title: "Shoes",
          price: 50,
          currency: "USD",
          date: "2022-10-05",
        },
      ],
    },
  ],
};
convertToExternalDataTypes(chat);
// Convert the internal data to external data
// let extChat = convertToExternalDataTypes(chat);
// Sometimes we experience a mismatch in data types between different components. We need
// a converter that will represent the provided data as expected.
// Create a converter that gets data with internal types and returns data with external
// types.
// *Optional: please, prepare a mock function that will generate the test data that will
// be used for testing purposes.*
// Please, follow the steps:
// 1. Read the whole doc
// 2. Review the types added above
// 3. Do the coding using TypeScript
// Please add your comments into README.md file
// 5. Profit!!!
