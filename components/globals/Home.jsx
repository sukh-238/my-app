import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
export const foods = [
  {
    name: "Chocolate Truffle Cake",
    image: "https://bluebowlrecipes.com/wp-content/uploads/2023/08/chocolate-truffle-cake-8844.jpg",
  },
  {
    name: "Rich Chocolate Cake",
    image: "https://theobroma.in/cdn/shop/files/RichChocolateCake.jpg?v=1750340766",
  },
  {
    name: "Moist Chocolate Cake",
    image: "https://www.lifeloveandsugar.com/wp-content/uploads/2014/08/Best-Moist-Chocolate-Cake1-1.jpg",
  },
  {
    name: "Classic Chocolate Cake",
    image: "https://bestrecipesuk.com/wp-content/uploads/2020/01/Chocolate-Cake-800x840.jpg?crop=1",
  },
  {
    name: "Mini Chocolate Cakes",
    image: "https://www.recipetineats.com/tachyon/2023/11/Mini-chocolate-cakes_2.jpg",
  },
  {
    name: "Onion Pizza",
    image: "https://cdn.uengage.io/uploads/5/image-191979-1715686806.png",
  },
  {
    name: "Cheese Burger",
    image: "https://www.recipetineats.com/tachyon/2022/08/Stack-of-cheeseburgers.jpg",
  },
  {
    name: "Pasta Alfredo",
    image: "https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg",
  },
  {
    name: "Grilled Sandwich",
    image: "https://static.toiimg.com/thumb/53110049.cms?width=1200&height=900",
  },
  {
    name: "French Fries",
    image: "https://whisperofyum.com/wp-content/uploads/2024/10/whisper-of-yum-homemade-french-fries.jpg",
  },
  {
    name: "Blueberry Muffin",
    image: "https://cambreabakes.com/wp-content/uploads/2024/03/bakery-style-blueberry-muffins-featured-2.jpg",
  },
  {
    name: "Margherita Pizza",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Pizza_Margherita_stu_spivack.jpg/1200px-Pizza_Margherita_stu_spivack.jpg",
  },
  {
    name: "Strawberry Cupcake",
    image: "https://www.veggieinspired.com/wp-content/uploads/2015/05/vegan-strawberry-cupcakes-singlecloseup.jpg",
  },
];

const Home = () => {
  return (
   <ScrollView  style={styles.scroll}>
     <View style={styles.content}>
      <View style={styles.search}>
        <TextInput
          placeholder="Search"
          placeholderTextColor="rgba(53, 123, 254, 1)"
          style={styles.input}
        />

        <Feather name="search" size={24} color="black" style={styles.icon} />
      </View>
      <View style={styles.phone}>
        <AntDesign name="arrow-left" size={24} color="white" />
        <Text style={styles.text}>Eat & Enjoy</Text>
        <Text></Text>
      </View>
      <View>
        <Text style={styles.brand}>Nutriments</Text>
      </View>
      <View>
        <FlatList
          data={foods}
          
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.list}
          
          renderItem={({ item }) => (
            <View style={styles.item}>
              <View style={styles.circle}>
                <Image source={{ uri: item.image }} style={styles.image} />
              </View>
              <Text style={styles.name}>{item.name}</Text>
            </View>
          )}
        />
      </View>

   <View style={styles.cardContainer}>
  <FlatList
    data={foods}
    numColumns={2}
    scrollEnabled={true}

   
    renderItem={({ item }) => (
      <View style={styles.card}>
        <Image source={{ uri: item.image }} style={styles.cardImage} />

        <Text style={styles.cardTitle}>{item.name}</Text>

        <Text style={styles.cardSub}>Delicious Foods</Text>

        <Text style={styles.cardPrice}>
          ₹{(79999 + Math.random() * 10000).toFixed(0)}
        </Text>
      </View>
    )}
  />
</View>

<View>
  <Text>Others buy</Text>
  <View>
    <FlatList 
    data={foods}
    horizontal
    showsHorizontalScrollIndicator={false}

    contentContainerStyle={styles.hoz}

    
    
    />
  </View>
</View>

    </View>
   </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 5,
    marginVertical: 4,
    // paddingHorizontal: 10,
  },
  search: {
    flexDirection: "row",
    margin: 5,
    color: "white",
    alignItems: "center",
    backgroundColor: "rgba(218, 218, 235, 1)",
    padding: 5,

    borderRadius: 10,

    shadowColor: "rgba(0, 191, 255, 1)", // light blue shadow for effect
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 3,
  },
  input: {
    flex: 1,
    color: "rgba(224, 239, 255, 1)",

    alignItems: "center",
    padding: 5,
  },

  phone: {
    color: "white",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
    paddingLeft: 5,
    justifyContent: "space-between",
  },
  text: {
    color: "white",
    fontSize: 16,
  },
  brand: {
    paddingLeft: 5,
    color: "white",
  },

  list: {
    marginVertical: 20,
    paddingLeft: 5,
  },
  item: {
    alignItems: "center",
    marginRight: 15,
  },

  circle: {
    borderWidth: 2,
    borderColor: "rgba(0, 3, 8, 1)",
    borderRadius: 50,

    padding: 6,
    backgroundColor: "rgba(199, 208, 224, 1)",
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: 80,
    height: 80,
    padding: 2,
    borderRadius: 30,
  },

  name: {
    color: "white",
    fontSize: 12,
    marginTop: 5,
    textAlign: "center",
    width: 70,
  },
  cardContainer:{
    marginTop:10,
    paddingHorizontal:10
  },
  card:{
  backgroundColor: "rgba(80, 119, 124, 1)",
  borderRadius: 10,
  padding: 10,
  margin: 5,
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  shadowColor: "rgba(0, 0, 0, 1)",
  shadowOpacity: 0.2,
  shadowRadius: 4,
  elevation: 3,
  },
  cardImage:{
    width:120,
    height:120,
    borderRadius: 10,
  marginBottom: 10,
  },
  cardTitle: {
  color: "white",
  fontSize: 14,
  fontWeight: "600",
},

cardSub: {
  color: "rgba(160, 160, 160, 1)",
  fontSize: 12,
  marginTop: 4,
},

cardPrice: {
  color: "rgba(74, 222, 128, 1)",
  fontWeight: "bold",
  marginTop: 6,
},
});







// import {
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   View,
//   FlatList,
//   Image,
//   TouchableOpacity,
// } from "react-native";
// import React from "react";
// import AntDesign from "@expo/vector-icons/AntDesign";


// export const foods = [
//   {
//     name: "Pizza Hut Special",
//     image:
//       "https://media-cdn.tripadvisor.com/media/photo-s/05/8b/03/21/pizza-hut.jpg",
//   },
//   {
//     name: "Creamy White Sauce Pasta",
//     image:
//       "https://www.cookwithkushi.com/wp-content/uploads/2016/07/best_white_sauce_pasta_bechamel_sauce.jpg",
//   },
//   {
//     name: "Chocolate Truffle Cake",
//     image:
//       "https://www.modernhoney.com/wp-content/uploads/2024/01/Best-Chocolate-Cake-2-crop-scaled.jpg",
//   },
//   {
//     name: "Delicious Veg Pasta",
//     image:
//       "https://www.indianveggiedelight.com/wp-content/uploads/2022/12/white-sauce-pasta-featured.jpg",
//   },
//   {
//     name: "Classic Cheese Pizza",
//     image:
//       "https://i.pinimg.com/736x/d8/32/6e/d8326ecba30d8e32751eb9911826cb97.jpg",
//   },
// ];

// const Cart = () => {
//   return (
//     <SafeAreaView style={styles.safe}>
      
//       <View style={styles.header}>
//         <AntDesign name="arrowleft" size={24} color="white" />
//         <Text style={styles.title}>My Cart</Text>
//         <View style={{ width: 24 }} /> 
//       </View>

      
//       <FlatList
//         data={foods}
//         keyExtractor={(item, index) => index.toString()}
//         contentContainerStyle={{ paddingBottom: 150 }}
//         renderItem={({ item }) => (
//           <View style={styles.card}>
//             <Image source={{ uri: item.image }} style={styles.image} />

//             <View style={styles.details}>
//               <Text style={styles.name}>{item.name}</Text>
//               <Text style={styles.price}>
//                 ₹{(250 + Math.random() * 200).toFixed(0)}
//               </Text>

//               <View style={styles.counter}>
//                 <Text style={styles.btn}>-</Text>
//                 <Text style={styles.qty}>1</Text>
//                 <Text style={styles.btn}>+</Text>
//               </View>
//             </View>
//           </View>
//         )}
//       />

      
//       <View style={styles.bottomSection}>
//         <View style={styles.totalBox}>
//           <Text style={styles.tot}>Total</Text>
//           <Text style={styles.totalPrice}>₹3980</Text>
//         </View>

//         <TouchableOpacity style={styles.button}>
//           <Text style={styles.buttonText}>Pay Now</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default Cart;

// const styles = StyleSheet.create({
//   safe: {
//     flex: 1,
//     backgroundColor: "rgba(0, 24, 64, 1)",
//     paddingHorizontal: 10,
//     paddingTop: 10,
//   },
//   header: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginVertical: 10,
//   },
//   title: {
//     color: "white",
//     fontSize: 20,
//     fontWeight: "bold",
//   },
//   card: {
//     flexDirection: "row",
//     backgroundColor: "rgba(47, 51, 58, 1)",
//     borderRadius: 12,
//     padding: 15,
//     alignItems: "center",
//     marginBottom: 10,
//   },
//   image: {
//     width: 90,
//     height: 90,
//     borderRadius: 10,
//   },
//   details: {
//     flex: 1,
//     marginLeft: 15,
//     justifyContent: "flex-start",
//   },
//   name: {
//     color: "white",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   price: {
//     color: "rgba(154, 164, 195, 1)",
//     marginTop: 4,
//     marginBottom: 8,
//   },
//   counter: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   btn: {
//     backgroundColor: "rgba(42, 46, 58, 1)",
//     color: "white",
//     fontSize: 18,
//     width: 32,
//     height: 32,
//     textAlign: "center",
//     borderRadius: 6,
//     textAlignVertical: "center",
//   },
//   qty: {
//     color: "white",
//     fontSize: 16,
//     marginHorizontal: 10,
//   },
//   bottomSection: {
//     position: "absolute",
//     bottom: 0,
//     left: 0,
//     right: 0,
//     padding: 20,
//     backgroundColor: "hsla(218, 100%, 13%, 1.00)",
//     borderTopWidth: 1,
//     borderTopColor: "zrgba(60, 65, 78, 1)",
//   },
//   totalBox: {
//     backgroundColor: "#152850",
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     borderRadius: 8,
//     paddingVertical: 15,
//     paddingHorizontal: 20,
//     marginBottom: 15,
//   },
//   tot: {
//     color: "white",
//     fontWeight: "bold",
//     fontSize: 16,
//   },
//   totalPrice: {
//     color: "#9aa4c3",
//     fontSize: 16,
//     fontWeight: "600",
//   },
//   button: {
//     backgroundColor: "#00b4d8",
//     borderRadius: 8,
//     paddingVertical: 14,
//     alignItems: "center",
//   },
//   buttonText: {
//     color: "white",
//     fontWeight: "bold",
//     fontSize: 16,
//   },
// });
