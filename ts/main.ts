// internal data types
type ShopingItemType = {
  title: string;
  price: number;
  currency: string;
  date: string;
};
interface INodeElement {
  firstName: string;
  lastName: string;
  age: number;
  birthDate: string;
  shoppingItemsList?: ShopingItemType[];
}
type Chat = {
  title: string;
  nodesList: INodeElement[];
};
// external data types
type Timestamp = {
  seconds: number;
  nanos: number;
};
type ExtShopingItemType = {
  Title: string;
  Price: number;
  Currency: string;
  Date: Timestamp;
};
interface IExtNodeElement {
  FirstName: string;
  LastName: string;
  Age: number;
  BirthDate: Timestamp;
  ShoppingItems: ExtShopingItemType[];
}
type ExtChat = {
  Title: string;
  ChatItems: IExtNodeElement[];
};

//convert timestamp
const convertToTimestamp = (date: string): Timestamp => {
  let day = new Date(date);
  return {
    seconds: day.getTime() / 1000,
    nanos: 0,
  };
};
// Function to convert the internal data types to the external data types
const convertToExternalDataTypes = (chat: Chat): ExtChat => {
  let extChat: ExtChat = {
    Title: chat.title,
    ChatItems: [],
  };
  chat.nodesList.forEach((item) => {
    let extNode: IExtNodeElement = {
      FirstName: item.firstName,
      LastName: item.lastName,
      Age: item.age,
      BirthDate: convertToTimestamp(item.birthDate),
      ShoppingItems: [],
    };
    item.shoppingItemsList.forEach((shoppingItem) => {
      let extShoppingItem: ExtShopingItemType = {
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
};
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
