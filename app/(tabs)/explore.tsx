import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";


export const foods = [
  {
    name: "Pizza Hut Special",
    image:
      "https://media-cdn.tripadvisor.com/media/photo-s/05/8b/03/21/pizza-hut.jpg",
  },
  {
    name: "Creamy White Sauce Pasta",
    image:
      "https://www.cookwithkushi.com/wp-content/uploads/2016/07/best_white_sauce_pasta_bechamel_sauce.jpg",
  },
  {
    name: "Chocolate Truffle Cake",
    image:
      "https://www.modernhoney.com/wp-content/uploads/2024/01/Best-Chocolate-Cake-2-crop-scaled.jpg",
  },
  {
    name: "Delicious Veg Pasta",
    image:
      "https://www.indianveggiedelight.com/wp-content/uploads/2022/12/white-sauce-pasta-featured.jpg",
  },
  {
    name: "Classic Cheese Pizza",
    image:
      "https://i.pinimg.com/736x/d8/32/6e/d8326ecba30d8e32751eb9911826cb97.jpg",
  },
];

const Cart = () => {
  return (
    <SafeAreaView style={styles.safe}>
      
      <View style={styles.header}>
  <AntDesign name={"arrowleft" as any} size={24} color="white" />
        <Text style={styles.title}>My Cart</Text>
        <View style={{ width: 24 }} /> 
      </View>

      
      <FlatList
        data={foods}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{ paddingBottom: 150 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />

            <View style={styles.details}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>
                ₹{(250 + Math.random() * 200).toFixed(0)}
              </Text>

              <View style={styles.counter}>
                <Text style={styles.btn}>-</Text>
                <Text style={styles.qty}>1</Text>
                <Text style={styles.btn}>+</Text>
              </View>
            </View>
          </View>
        )}
      />

      
      <View style={styles.bottomSection}>
        <View style={styles.totalBox}>
          <Text style={styles.tot}>Total</Text>
          <Text style={styles.totalPrice}>₹3980</Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Pay Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "rgba(3, 6, 12, 1)",
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "rgba(47, 51, 58, 1)",
    borderRadius: 12,
    padding: 15,
    alignItems: "center",
    marginBottom: 10,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 10,
  },
  details: {
    flex: 1,
    marginLeft: 15,
    justifyContent: "flex-start",
  },
  name: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  price: {
    color: "rgba(154, 164, 195, 1)",
    marginTop: 4,
    marginBottom: 8,
  },
  counter: {
    flexDirection: "row",
    alignItems: "center",
  },
  btn: {
    backgroundColor: "rgba(42, 46, 58, 1)",
    color: "white",
    fontSize: 18,
    width: 32,
    height: 32,
    textAlign: "center",
    borderRadius: 6,
    textAlignVertical: "center",
  },
  qty: {
    color: "white",
    fontSize: 16,
    marginHorizontal: 10,
  },
  bottomSection: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: "rgba(12, 15, 19, 1)",
    borderTopWidth: 1,
    borderTopColor: "zrgba(60, 65, 78, 1)",
  },
  totalBox: {
    backgroundColor: "rgba(20, 24, 34, 1)",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  tot: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  totalPrice: {
    color: "rgba(154, 164, 195, 1)",
    fontSize: 16,
    fontWeight: "600",
  },
  button: {
    backgroundColor: "rgba(10, 12, 12, 1)",
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
