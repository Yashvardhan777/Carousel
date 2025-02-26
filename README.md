## Vertical Carousel (React Native)  

### Overview  
This project is a **smooth, high-performance vertical carousel** built in **React Native**. Each card in the carousel supports **gifs and images as backgrounds**. The Call-to-Action (CTA) elements dynamically change themes, and text animations enhance user experience.  

---

## **Setup & Installation**  

### **Prerequisites**  
- Node.js (>=16.x)  
- React Native CLI  
- Xcode (for iOS) / Android Studio (for Android)  

### **Steps to Run the Project**  
1. **Clone the Repository**  
   ```sh
   git clone https://github.com/Yashvardhan777/Carousel.git
   cd Carousel
   ```

2. **Install Dependencies**  
   ```sh
   npm install
   ```

3. **Run on iOS**  
   ```sh
   cd ios && pod install && cd ..
   npx react-native run-ios
   ```

4. **Run on Android**  
   ```sh
   npx react-native run-android
   ```

---

## **Features Implemented**  

-> **Vertical Carousel** – A seamless, smooth-scrolling vertical list.  
-> **Supports GIFs and Image Backgrounds** – Each card can have different media types.  
-> **Dynamic CTA Themes** – The CTA style changes based on the card config.  
-> **Animated Text Appearance** – Text elements animate when they appear for the first time.

---

## **Trade-offs & Challenges Faced**

### **Used Expo for development**
- **Issue:** Time for development was limited
- **Solution:** Used Expo to seamlessly begin development as it provides initial working templates.

### **Animations Without Third-Party Libraries**  
- **Issue:** No external animation libraries were allowed, making animations trickier.  
- **Solution:** Used React Native’s built-in `Animated` API to handle smooth transitions.  

---

## **Future Improvements**  
- Implement lazy-loading for videos and Image Caching for images to further optimize memory.  
- Add gesture-based navigation for a more interactive feel.  
- Enhance animations with more fluid effects.
- To use flexbox and dynamic styling
