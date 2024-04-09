export default function AnimatedLetters({ letterClass, strArray, index }) {
   return (
      <span>
         {strArray.map((char, i) => (
            <span key={i} className={`${letterClass} _${i + index}`}>
               {char}
            </span>
         ))}
      </span>
   )
}
