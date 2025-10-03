"use client"

import { useState } from "react"
import type { JSX } from "react/jsx-runtime"

interface Technology {
  name: string
  logo: JSX.Element
  category: string
}

const technologyData = {
  "Backend Tools": [
    {
      name: "Node.js",
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#339933">
          <path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l7.44 4.3c.46.26 1.04.26 1.5 0l7.44-4.3c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.51-.2-.78-.2zm0 2.03L18.5 8 12 12.12 5.5 8 12 3.88zm-6.5 5.49L11 13.49v8.38L5.5 17.75V9.37zm1.5 0v8.38L11 17.75V9.37L7 9.37z" />
        </svg>
      ),
      category: "Backend Tools",
    },
    {
      name: "Python",
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <path
            fill="#3776ab"
            d="M12.1 0C9.3 0 7.1.9 7.1 2.8v2.6h4.9v.7H4.6C2.1 6.1 0 7.8 0 12s2.1 5.9 4.6 5.9h2.9v-3.9c0-2.4 2.1-4.4 4.6-4.4h4.9c1.3 0 2.3-1.1 2.3-2.4V2.8C19.3.9 17.1 0 14.3 0h-2.2zm-1.2 1.5c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9z"
          />
          <path
            fill="#ffd43b"
            d="M19.4 6.1h-2.9v3.9c0 2.4-2.1 4.4-4.6 4.4h4.9c1.3 0 2.3 1.1 2.3 2.4v4.4c0 1.9 2.2 2.8 5 2.8h2.2c2.8 0 5-.9 5-2.8v-2.6h-4.9v-.7h7.4c2.5 0 4.6-1.7 4.6-5.9s-2.1-5.9-4.6-5.9zm-6.3 13.4c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9z"
          />
        </svg>
      ),
      category: "Backend Tools",
    },
    {
      name: "Laravel",
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#FF2D20">
          <path d="M23.642 5.43a.364.364 0 01.014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934a.378.378 0 01-.188.326L9.93 23.949a.316.316 0 01-.066.027c-.008.002-.016.008-.024.01a.348.348 0 01-.192 0c-.011-.002-.02-.008-.03-.012-.02-.008-.042-.014-.062-.025L.533 18.755a.376.376 0 01-.189-.326V2.974c0-.033.005-.066.014-.098.003-.011.01-.021.014-.032a.369.369 0 01.023-.058c.004-.013.015-.022.023-.033l.033-.045c.012-.01.025-.018.037-.027.014-.012.027-.024.041-.034H.53L5.043.05a.375.375 0 01.375 0L9.93 2.647h.002c.015.01.027.021.04.033.012.009.025.018.037.027.013.014.02.03.023.045.008.011.02.021.025.033.01.02.017.038.024.058.003.011.01.021.013.032.01.031.014.064.014.098v9.652l3.76-2.164V5.527c0-.033.004-.066.013-.098.003-.01.01-.02.013-.032a.487.487 0 01.024-.059c.007-.012.018-.02.025-.033.012-.015.021-.030.033-.043.012-.012.025-.02.037-.027.014-.013.026-.023.041-.034h.001l4.513-2.598a.375.375 0 01.375 0L9.93 2.647h.002c.015.01.027.021.04.033.012.009.025.018.037.027.013.014.022.03.033.045.008.012.02.021.025.033.01.02.017.038.024.058.006.01.012.021.015.032zm-.74 5.032V6.179l-1.578.908-2.182 1.256v4.283zm-4.51 7.75v-4.287l-2.147 1.225-6.126 3.498v4.325zM1.093 3.624v14.588l8.273 4.761v-4.325l-4.322-2.445-.002-.003H5.04c-.014-.01-.025-.021-.04-.031-.011-.01-.024-.018-.035-.027l-.001-.002c-.013-.012-.021-.025-.031-.04-.01-.011-.021-.02-.028-.033-.002-.003-.006-.003-.009-.006-.007-.014-.01-.027-.013-.042-.002-.007-.007-.133-.009-.021V6.179zM5.97.717L2.182 2.624 5.97 4.53l3.787-1.906zm-.188 15.343l2.182-1.256V3.624l-1.58.909-2.182 1.255v11.18zm6.597 2.115l2.147-1.225 1.578-.908-3.786-2.115-2.147 1.225zm0-6.48V.717l-1.578.908L8.619 2.88v10.878z" />
        </svg>
      ),
      category: "Backend Tools",
    },
    {
      name: ".NET",
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#512BD4">
          <path d="M24 8.77h-2.468v7.565h-1.425V8.77h-2.462V7.53H24zm-6.852 7.565h-4.821V7.53h4.63v1.24h-3.205v2.494h2.953v1.234h-2.953v2.604h3.396zm-6.708 0H8.882L4.78 9.863a2.896 2.896 0 01-.258-.51h-.036c.032.189.048.592.048 1.21v5.772H3.157V7.53h1.659l3.965 6.32c.167.261.275.442.323.54h.024c-.04-.233-.06-.629-.06-1.185V7.529h1.372zm-8.703-.693a.868.868 0 01-.869.693.868.868 0 01-.868-.693.868.868 0 01.868-.692.868.868 0 01.869.692z" />
        </svg>
      ),
      category: "Backend Tools",
    },
    {
      name: "Spring Boot",
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#6DB33F">
          <path d="M20.205 16.392c-2.469 3.289-7.741 2.179-11.122 2.338 0 0-.599.034-1.201.133 0 0 .228-.097.519-.198 2.374-.821 3.496-.986 4.939-1.727 2.71-1.388 5.408-4.413 5.957-7.555-1.032 3.022-4.17 5.623-7.027 6.679-1.955.722-5.492 1.424-5.493 1.424a5.28 5.28 0 01-.143-.076c-2.405-1.17-2.475-6.38 1.894-8.059 1.916-.736 3.747-.332 5.818-.825 2.208-.525 4.766-2.18 5.805-4.344 1.165 3.458 2.565 8.866.054 12.21zm.042-13.28a9.212 9.212 0 01-1.065 1.89 9.982 9.982 0 00-7.167-3.031C6.492 1.971 2 6.463 2 11.985a9.983 9.983 0 003.205 7.334l.22.194a9.934 9.934 0 002.314 1.471l.364.180c.52.249 1.063.459 1.628.628.081.024.164.05.246.073a9.908 9.908 0 001.789.175c5.522 0 9.999-4.492 9.999-10.014a9.957 9.957 0 00-1.518-5.536z" />
        </svg>
      ),
      category: "Backend Tools",
    },
    {
      name: "PHP",
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#777BB4">
          <path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 01-.305.550zm7.130-2.7a2.23 2.23 0 00-.305-.55c-.261-.25-.575-.438-.917-.551-.336-.108-.765-.164-1.285-.164h-1.18l-.327 1.681h1.180c.556 0 .97.105 1.242.314.272.21.455.559.55 1.049.092.47.05.802-.124.995-.175.193-.523.29-1.047.29h-.838l-.515-2.648h-.944l.515 2.648h-.838l-.327 1.681h1.378c.797 0 1.378-.209 1.744-.628.366-.418.476-1.002.33-1.752zm7.405 0a2.23 2.23 0 00-.305-.55c-.261-.25-.575-.438-.917-.551-.336-.108-.765-.164-1.285-.164h-1.18l-.327 1.681h1.18c.556 0 .97.105 1.242.314.272.21.455.559.55 1.049.092.47.05.802-.124.995-.175.193-.523.29-1.047.29h-.838l-.515-2.648h-.944l.515 2.648h-.838l-.327 1.681h1.378c.797 0 1.378-.209 1.744-.628.366-.418.476-1.002.33-1.752z" />
        </svg>
      ),
      category: "Backend Tools",
    },
    {
      name: "Ruby",
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#CC342D">
          <path d="M20.156.083c3.033.525 3.893 2.598 3.829 4.77L24 4.822 22.635 22.71 4.89 23.926h.016C2.717 23.926.846 22.61.846 20.296c0-1.781 1.233-4.513 2.43-6.688L20.156.083z" />
          <path fill="#9B111E" d="M8.109 2.655L2.246 6.09c.183 3.756 2.778 6.336 5.005 7.279l.859-10.714z" />
          <path
            fill="#FFFFFF"
            d="M8.109 2.655L2.246 6.09c.183 3.756 2.778 6.336 5.005 7.279l.859-10.714z"
            opacity=".4"
          />
          <path fill="#9B111E" d="M8.109 2.655l12.047-2.572c-2.629-.157-5.505.157-7.881 1.549l-4.166 1.023z" />
          <path
            fill="#FFFFFF"
            d="M8.109 2.655l12.047-2.572c-2.629-.157-5.505.157-7.881 1.549l-4.166 1.023z"
            opacity=".4"
          />
          <path
            fill="#9B111E"
            d="M7.25 13.369c2.43-.91 3.854-3.033 4.478-5.871L20.156.083c-.262 2.598-1.75 6.457-5.611 9.016l-7.295 4.27z"
          />
          <path
            fill="#FFFFFF"
            d="M7.25 13.369c2.43-.91 3.854-3.033 4.478-5.871L20.156.083c-.262 2.598-1.75 6.457-5.611 9.016l-7.295 4.27z"
            opacity=".4"
          />
          <path fill="#9B111E" d="M7.25 13.369L22.635 22.71c-1.05-.525-2.756-1.444-4.27-2.756L7.25 13.369z" />
          <path
            fill="#FFFFFF"
            d="M7.25 13.369L22.635 22.71c-1.05-.525-2.756-1.444-4.27-2.756L7.25 13.369z"
            opacity=".4"
          />
          <path fill="#9B111E" d="M2.246 6.09l.859 10.714c1.444-.525 2.756-1.444 4.145-2.435L2.246 6.09z" />
          <path
            fill="#FFFFFF"
            d="M2.246 6.09l.859 10.714c1.444-.525 2.756-1.444 4.145-2.435L2.246 6.09z"
            opacity=".4"
          />
          <path fill="#9B111E" d="M3.105 16.804L22.635 22.71c-.787.262-1.575.525-2.362.525L3.105 16.804z" />
          <path
            fill="#FFFFFF"
            d="M3.105 16.804L22.635 22.71c-.787.262-1.575.525-2.362.525L3.105 16.804z"
            opacity=".4"
          />
        </svg>
      ),
      category: "Backend Tools",
    },
    {
      name: "Rust",
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#000000">
          <path d="M23.8346 11.7033l-1.0073-.6236a13.7268 13.7268 0 00-.0283-.2936l.8656-.8069a.3483.3483 0 00-.1154-.5938l-1.0821-.4456a13.0384 13.0384 0 00-.0836-.2777l.7186-.9718a.3462.3462 0 00-.2257-.5649l-1.1323-.2121a12.9966 12.9966 0 00-.1366-.2587l.5649-1.1019a.3462.3462 0 00-.5121-.3362L18.335 5.2l-.2587-.1366-.2121-1.1323a.3462.3462 0 00-.5649-.2257l-.9718.7186a12.9112 12.9112 0 00-.2777-.0836L15.6681 3.27a.3462.3462 0 00-.5938-.1154l-.8069.8656a13.7268 13.7268 0 00-.2936-.0283L13.3002.1346a.3483.3483 0 00-.6004 0l-.6236 1.0073a13.7268 13.7268 0 00-.2936.0283L10.9757 2.35a.3462.3462 0 00-.5938.1154l-.4456 1.0821a13.0384 13.0384 0 00-.2777.0836l-.9718-.7186a.3462.3462 0 00-.5649.2257l-.2121 1.1323a12.9966 12.9966 0 00-.2587.1366L5.665 3.9665a.3462.3462 0 00-.4358.4358l.4006 1.2026a13.4777 13.4777 0 00-.1864.2342l-1.1474-.0234a.3462.3462 0 00-.3362.5121l.5649 1.1019a12.9112 12.9112 0 00-.1366.2587L3.27 8.3319a.3462.3462 0 00-.2257.5649l.7186.9718a13.0384 13.0384 0 00-.0836.2777L2.35 11.0243a.3462.3462 0 00-.1154.5938l.8656.8069a13.7268 13.7268 0 00-.0283.2936L.1346 13.2967a.3483.3483 0 000 .6004l1.0073.6236a13.7268 13.7268 0 00.0283.2936L.3047 15.6212a.3462.3462 0 00.1154.5938l1.0821.4456a13.0384 13.0384 0 00.0836.2777l-.7186.9718a.3462.3462 0 00.2257.5649l1.1323.2121a12.9966 12.9966 0 00.1366.2587l-.5649 1.1019a.3462.3462 0 00-.3362.5121l1.1474-.0234a13.4777 13.4777 0 00.1864.2342l-.4006 1.2026a.3462.3462 0 00-.4358.4358l1.2026-.4006a12.9112 12.9112 0 00-.2342.1864l-.0234 1.1474a.3462.3462 0 00-.5121.3362L5.665 20.8l.2587.1366.2121 1.1323a.3462.3462 0 00.5649.2257l.9718-.7186a12.9112 12.9112 0 00.2777.0836L8.3319 22.73a.3462.3462 0 00.5938.1154l.8069-.8656a13.7268 13.7268 0 00.2936.0283l.6236 1.0073a.3483.3483 0 00.6004 0l.6236-1.0073a13.7268 13.7268 0 00.2936-.0283l.8069.8656a.3462.3462 0 00.5938-.1154l.4456-1.0821a13.0384 13.0384 0 00.2777-.0836l.9718.7186a.3462.3462 0 00.5649-.2257l.2121-1.1323a12.9966 12.9966 0 00.2587-.1366l1.1019.5649a.3462.3462 0 00.5121-.3362l-.0234-1.1474a13.4777 13.4777 0 00.2342-.1864l1.2026.4006a.3462.3462 0 00.4358-.4358l-.4006-1.2026a12.9112 12.9112 0 00.1864-.2342l1.1474.0234a.3462.3462 0 00.3362-.5121l-.5649-1.1019a12.9966 12.9966 0 00.1366-.2587l1.1323-.2121a.3462.3462 0 00.2257-.5649l-.7186-.9718a13.0384 13.0384 0 00.0836-.2777l1.0821-.4456a.3462.3462 0 00.1154-.5938l-.8656-.8069a13.7268 13.7268 0 00.0283-.2936l1.0073-.6236a.3483.3483 0 000-.6004zM12 18.5625c-3.6152 0-6.5625-2.9473-6.5625-6.5625S8.3848 5.4375 12 5.4375s6.5625 2.9473 6.5625 6.5625S15.6152 18.5625 12 18.5625z" />
          <circle cx="12" cy="12" r="5.0625" fill="#FFFFFF" />
          <path d="M12 8.0625c-.2071 0-.375.1679-.375.375v2.8125H9.75c-.2071 0-.375-.1679-.375-.375s.1679-.375.375-.375h1.875v2.8125c0 .2071.1679.375.375.375s.375-.1679.375-.375V12.375H14.25c.2071 0 .375-.1679.375-.375s-.1679-.375-.375-.375h-1.875V9.1875c0-.2071-.1679-.375-.375-.375z" />
        </svg>
      ),
      category: "Backend Tools",
    },
    {
      name: "Go",
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#00ADD8">
          <path d="M1.811 10.231c-.047 0-.058-.023-.035-.059l.246-.315c.023-.035.081-.058.128-.058h4.172c.046 0 .058.035.035.07l-.199.303c-.023.036-.082.07-.117.07zM.047 11.306c-.047 0-.059-.023-.035-.058l.245-.316c.023-.035.082-.058.129-.058h5.328c.047 0 .07.035.058.07l-.093.28c-.012.047-.058.07-.105.07zM2.828 12.394c-.047 0-.059-.035-.035-.07l.163-.292c.023-.035.070-.070.117-.070h2.337c.047 0 .070.035.070.082l-.023.28c0 .047-.047.082-.082.082zm21.172-2.745c0 .14-.093.28-.21.35l-3.093 2.22c-.128.093-.21.14-.21.28v4.327c0 .21-.175.385-.385.385s-.385-.175-.385-.385v-4.327c0-.14-.082-.187-.21-.28l-3.093-2.22c-.117-.07-.21-.21-.21-.35V5.677c0-.21.175-.385.385-.385s.385.175.385.385v3.972c0 .14.082.187.21.28l3.093 2.22c.117.07.21.21.21.35zm-18.667 6.815c-.047 0-.059-.023-.035-.058l.163-.292c.023-.035.070-.070.117-.070h2.337c.047 0 .070.035.070.082l-.023.28c0 .047-.047.082-.082.082zm.128-.175c-.047 0-.07-.023-.07-.07 0-.047.023-.093.07-.093h.128c.047 0 .07.046.07.093 0 .047-.023.07-.07.07zm.128-.175c-.047 0-.07-.023-.07-.07 0-.047.023-.093.07-.093h.128c.047 0 .07.046.07.093 0 .047-.023.07-.07.07z" />
        </svg>
      ),
      category: "Backend Tools",
    },
    {
      name: "Java",
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#ED8B00">
          <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639" />
        </svg>
      ),
      category: "Backend Tools",
    },
  ],
  Frontend: [
    {
      name: "React",
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#61DAFB">
          <path d="M14.23 12.004a2.236 2.236 0 01-2.235 2.236 2.236 2.236 0 112.235-2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.092.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.36-.034-.47 0-.92.014-1.183.034.44-.572.895-1.096 1.36-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.676-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.36.034.47 0 .92-.014 1.36-.034-.44.572-.895 1.095-1.36 1.56-.465-.467-.92-.992-1.36-1.56z" />
        </svg>
      ),
      category: "Frontend",
    },
    {
      name: "Vue.js",
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#42B983">
          <path d="M12 2L2 22h20L12 2zm0 5L17 17H7zm0 6L19 19H5zm0 6L21 21H3z" />
        </svg>
      ),
      category: "Frontend",
    },
    {
      name: "Angular",
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#DD0031">
          <path d="M12 2L2 22h20L12 2zm0 5L17 17H7zm0 6L19 19H5zm0 6L21 21H3z" />
        </svg>
      ),
      category: "Frontend",
    },
    {
      name: "Next.js",
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#000000">
          <path d="M12 2L2 22h20L12 2zm0 5L17 17H7zm0 6L19 19H5zm0 6L21 21H3z" />
        </svg>
      ),
      category: "Frontend",
    },
    {
      name: "Svelte",
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#FF3E00">
          <path d="M12 2L2 22h20L12 2zm0 5L17 17H7zm0 6L19 19H5zm0 6L21 21H3z" />
        </svg>
      ),
      category: "Frontend",
    },
    {
      name: "TypeScript",
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#3178C6">
          <path d="M12 2L2 22h20L12 2zm0 5L17 17H7zm0 6L19 19H5zm0 6L21 21H3z" />
        </svg>
      ),
      category: "Frontend",
    },
    {
      name: "JavaScript",
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#F7DF1E">
          <path d="M12 2L2 22h20L12 2zm0 5L17 17H7zm0 6L19 19H5zm0 6L21 21H3z" />
        </svg>
      ),
      category: "Frontend",
    },
    {
      name: "Tailwind CSS",
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#06B6D4">
          <path d="M12 2L2 22h20L12 2zm0 5L17 17H7zm0 6L19 19H5zm0 6L21 21H3z" />
        </svg>
      ),
      category: "Frontend",
    },
    {
      name: "Sass",
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#CC6699">
          <path d="M12 2L2 22h20L12 2zm0 5L17 17H7zm0 6L19 19H5zm0 6L21 21H3z" />
        </svg>
      ),
      category: "Frontend",
    },
  ],
  "AI Tools": [
    { name: "TensorFlow", logo: <div className="w-8 h-8 bg-gray-300">TF</div>, category: "AI Tools" },
    { name: "PyTorch", logo: <div className="w-8 h-8 bg-gray-300">PyTorch</div>, category: "AI Tools" },
    { name: "OpenAI", logo: <div className="w-8 h-8 bg-gray-300">OpenAI</div>, category: "AI Tools" },
    { name: "Hugging Face", logo: <div className="w-8 h-8 bg-gray-300">HF</div>, category: "AI Tools" },
    { name: "LangChain", logo: <div className="w-8 h-8 bg-gray-300">LC</div>, category: "AI Tools" },
    { name: "Scikit-learn", logo: <div className="w-8 h-8 bg-gray-300">SK</div>, category: "AI Tools" },
    { name: "Pandas", logo: <div className="w-8 h-8 bg-gray-300">Pandas</div>, category: "AI Tools" },
    { name: "NumPy", logo: <div className="w-8 h-8 bg-gray-300">NumPy</div>, category: "AI Tools" },
  ],
  Mobile: [
    { name: "React Native", logo: <div className="w-8 h-8 bg-gray-300">RN</div>, category: "Mobile" },
    { name: "Flutter", logo: <div className="w-8 h-8 bg-gray-300">Flutter</div>, category: "Mobile" },
    { name: "Swift", logo: <div className="w-8 h-8 bg-gray-300">Swift</div>, category: "Mobile" },
    { name: "Kotlin", logo: <div className="w-8 h-8 bg-gray-300">Kotlin</div>, category: "Mobile" },
    { name: "Xamarin", logo: <div className="w-8 h-8 bg-gray-300">Xamarin</div>, category: "Mobile" },
    { name: "Ionic", logo: <div className="w-8 h-8 bg-gray-300">Ionic</div>, category: "Mobile" },
    { name: "Unity", logo: <div className="w-8 h-8 bg-gray-300">Unity</div>, category: "Mobile" },
  ],
  "Cloud & DevOps": [
    { name: "AWS", logo: <div className="w-8 h-8 bg-gray-300">AWS</div>, category: "Cloud & DevOps" },
    { name: "Azure", logo: <div className="w-8 h-8 bg-gray-300">Azure</div>, category: "Cloud & DevOps" },
    { name: "Google Cloud", logo: <div className="w-8 h-8 bg-gray-300">GCP</div>, category: "Cloud & DevOps" },
    { name: "Docker", logo: <div className="w-8 h-8 bg-gray-300">Docker</div>, category: "Cloud & DevOps" },
    { name: "Kubernetes", logo: <div className="w-8 h-8 bg-gray-300">K8s</div>, category: "Cloud & DevOps" },
    { name: "Jenkins", logo: <div className="w-8 h-8 bg-gray-300">Jenkins</div>, category: "Cloud & DevOps" },
    { name: "GitLab", logo: <div className="w-8 h-8 bg-gray-300">GitLab</div>, category: "Cloud & DevOps" },
    { name: "Terraform", logo: <div className="w-8 h-8 bg-gray-300">TF</div>, category: "Cloud & DevOps" },
    { name: "Vercel", logo: <div className="w-8 h-8 bg-gray-300">Vercel</div>, category: "Cloud & DevOps" },
  ],
  Security: [
    { name: "OAuth", logo: <div className="w-8 h-8 bg-gray-300">OAuth</div>, category: "Security" },
    { name: "JWT", logo: <div className="w-8 h-8 bg-gray-300">JWT</div>, category: "Security" },
    { name: "Auth0", logo: <div className="w-8 h-8 bg-gray-300">Auth0</div>, category: "Security" },
    { name: "Firebase Auth", logo: <div className="w-8 h-8 bg-gray-300">Firebase</div>, category: "Security" },
    { name: "Okta", logo: <div className="w-8 h-8 bg-gray-300">Okta</div>, category: "Security" },
    { name: "HashiCorp Vault", logo: <div className="w-8 h-8 bg-gray-300">Vault</div>, category: "Security" },
    { name: "SSL/TLS", logo: <div className="w-8 h-8 bg-gray-300">SSL</div>, category: "Security" },
  ],
  CMS: [
    { name: "WordPress", logo: <div className="w-8 h-8 bg-gray-300">WP</div>, category: "CMS" },
    { name: "Strapi", logo: <div className="w-8 h-8 bg-gray-300">Strapi</div>, category: "CMS" },
    { name: "Contentful", logo: <div className="w-8 h-8 bg-gray-300">Contentful</div>, category: "CMS" },
    { name: "Sanity", logo: <div className="w-8 h-8 bg-gray-300">Sanity</div>, category: "CMS" },
    { name: "Ghost", logo: <div className="w-8 h-8 bg-gray-300">Ghost</div>, category: "CMS" },
    { name: "Drupal", logo: <div className="w-8 h-8 bg-gray-300">Drupal</div>, category: "CMS" },
    { name: "Webflow", logo: <div className="w-8 h-8 bg-gray-300">Webflow</div>, category: "CMS" },
    { name: "Prismic", logo: <div className="w-8 h-8 bg-gray-300">Prismic</div>, category: "CMS" },
  ],
  "CRM & Collab Platforms": [
    { name: "Salesforce", logo: <div className="w-8 h-8 bg-gray-300">SF</div>, category: "CRM & Collab Platforms" },
    { name: "HubSpot", logo: <div className="w-8 h-8 bg-gray-300">HubSpot</div>, category: "CRM & Collab Platforms" },
    { name: "Slack", logo: <div className="w-8 h-8 bg-gray-300">Slack</div>, category: "CRM & Collab Platforms" },
    {
      name: "Microsoft Teams",
      logo: <div className="w-8 h-8 bg-gray-300">Teams</div>,
      category: "CRM & Collab Platforms",
    },
    { name: "Notion", logo: <div className="w-8 h-8 bg-gray-300">Notion</div>, category: "CRM & Collab Platforms" },
    { name: "Airtable", logo: <div className="w-8 h-8 bg-gray-300">Airtable</div>, category: "CRM & Collab Platforms" },
    { name: "Trello", logo: <div className="w-8 h-8 bg-gray-300">Trello</div>, category: "CRM & Collab Platforms" },
    { name: "Asana", logo: <div className="w-8 h-8 bg-gray-300">Asana</div>, category: "CRM & Collab Platforms" },
    { name: "Jira", logo: <div className="w-8 h-8 bg-gray-300">Jira</div>, category: "CRM & Collab Platforms" },
  ],
}

const tabs = Object.keys(technologyData) as Array<keyof typeof technologyData>

export default function TechnologyStackSection() {
  const [activeTab, setActiveTab] = useState<keyof typeof technologyData>("Backend Tools")

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-normal text-black leading-tight">
            Technologies, Frameworks & Tools
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6 lg:gap-8 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 text-base lg:text-lg font-medium transition-all duration-300 relative ${
                activeTab === tab ? "text-[var(--brand-blue)]" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--brand-blue)] rounded-full" />
              )}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 lg:gap-6 max-w-5xl mx-auto">
          {technologyData[activeTab].map((tech, index) => (
            <div key={`${activeTab}-${index}`} className="group relative">
              <div className="relative bg-gray-100 hover:bg-white rounded-full px-6 py-3 transition-all duration-300 cursor-pointer min-w-[120px] h-12 flex items-center justify-center border border-transparent hover:border-gray-200 hover:shadow-md">
                {/* Default state - text label */}
                <span className="text-sm font-medium text-gray-800 group-hover:opacity-0 transition-opacity duration-300 text-center">
                  {tech.name}
                </span>

                {/* Hover state - logo only */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {tech.logo}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
