const Button = ({ children, secondary, href }) => {
  const Component = href ? "a" : "button";
  const baseStyle =
    "text-whiteSmoke bg-details px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:shadow-xl transition duration-300 ";
  const secondaryStyle =
    "lg:bg-transparent lg:text-details border border-details hover:bg-details hover:text-white hover:opacity-65";

  return (
    <Component
      href={href}
      className={`${baseStyle} ${secondary ? secondaryStyle : ""}`}
    >
      {children}
    </Component>
  );
};

export default Button;
