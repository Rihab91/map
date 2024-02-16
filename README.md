#   A React application that renders a map using the Map component inside the App component. 
#  install @react-google-maps/api as a dependency in project
 npm install @react-google-maps/api
# Import Statements:

React is imported for creating React components.
styled is imported from styled-components for styling React components with CSS.

# Styled Components:

AppContainer is a styled component defined using styled-components. It sets up the styling for the main container of the application. It uses flexbox to center its children vertically and horizontally and fills the entire viewport (100vh).
# Map Configuration:

mapContainerStyle: An object defining the size of the map container.
center: An object specifying the latitude and longitude of the center of the map.
zoom: A number representing the initial zoom level of the map.

# App Component:

It renders the AppContainer styled component.
Inside AppContainer, it renders the Map component.
The Map component is passed props (mapContainerStyle, center, and zoom) required to configure the map.
