// import { cn } from "../lib/utils";

// export function BackgroundOverlayCard({
//     index,
//     name,
//     description,
//     tags,
//     image,
//     source_code_link,
//     website_link,
// }) {
//   return (
//     <div className="max-w-xs w-full">
//       <div
//         className={cn(
//           "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
//           "bg-[url(https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80)] bg-cover",
//           "transition-all duration-500"
//         )}
//       >
//         {/* Hover video/gif overlay constrained to the card */}
//         <span
//           aria-hidden
//           className={cn(
//             "pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
//             "bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)] bg-cover"
//           )}
//         />
//         {/* Darken content on hover for contrast */}
//         <span
//           aria-hidden
//           className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-500 bg-black"
//         />
//         <div className="text relative z-50">
//           <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
//             {name}
//           </h1>
//           <p className="font-normal text-base text-gray-50 relative my-4">
//             {description}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
