import Feedback from "./feedback/feedback";

export const App = () => {
  return (
    <div
      style={{
        padding: '60px',
        backgroundColor: 'beige',
        height: '100vh',
        display: 'flex',
        fontSize: 40,
        color: '#010101'
      }}
    >
      < Feedback
      />      
    </div>
  );
};
