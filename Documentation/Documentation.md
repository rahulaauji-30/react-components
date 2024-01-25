## Installation of MUI

The icons used in these components are sourced from MUI. To integrate them, you'll need to install the required packages. Run the following command using npm:

```bash
npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
```

## Using Components

Navigate to the `components` folder to explore various components categorized in folders based on their functionality. Refer to the respective folders according to your use.

Import the components using the following path:

```jsx
import Playpause from "./components/video-components/Playpause";
```

Once imported, you can use the component in your code:

```jsx
import Playpause from "./components/video-components/Playpause";

export default function App() {
  return (
    <>
      <Playpause />
    </>
  );
}
```

## Styling Customization

You can easily customize the style of the components by using class names, inline styles, or other preferred styling methods. Adjust the icons' size by modifying the `font-size` property.

## Conclusion

Thank you for using these components! Happy coding!
