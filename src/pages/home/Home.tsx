import { Ping } from "./Ping";
import { MintNFT } from "./MintNFT"
import { ReadStateNFT } from "./ReadStateNFT"
import { Account } from "./Account"

function Home() {
  return (
    <div>
      <MintNFT/>
      <Account/>
      <ReadStateNFT/>
    </div>
  )
}

export { Home };
