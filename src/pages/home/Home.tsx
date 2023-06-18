import { Ping } from "./Ping";
import { MintNFT } from "./MintNFT"
import { ReadStateNFT } from "./ReadStateNFT"

function Home() {
  return (
    <div>
      <MintNFT/>
      <ReadStateNFT/>
    </div>
  )
}

export { Home };
