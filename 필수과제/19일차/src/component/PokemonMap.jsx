const List = ({ className, children }) => {
  return (
    <div className={`grid grid-cols-[repeat(auto-fit,minmax(160px,160px))] justify-center gap-4 ${className}`}>
      {children}
    </div>
  )
}

export default List
