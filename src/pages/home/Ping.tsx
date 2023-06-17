import { useAccount, useApi, useAlert } from "@gear-js/react-hooks";
import { web3FromSource } from "@polkadot/extension-dapp";
import { getProgramMetadata } from "@gear-js/api";
import { Button } from "@gear-js/ui";

function Ping() {
  const alert = useAlert();
  const { accounts, account } = useAccount();
  const { api } = useApi();

  // Add your programID
  const programID =
    "0xc53c2085d0fd2bee80733e04c3f009ae3a8042b143d2956de304301940cfcebc";

  // Add your metadata.txt
  const meta =
    "00000100000000010000000000000000000101000000f5011c0008186170705f696f2050696e67506f6e670001081050696e6700000010506f6e670001000004000002080008000004080c18000c10106773746418636f6d6d6f6e287072696d6974697665731c4163746f724964000004001001205b75383b2033325d000010000003200000001400140000050300180000050700";

  const metadata = getProgramMetadata(`0x${meta}`);

  const messageinit = "PING";
 
  const message: any = {
    destination: programID, // programId
    payload: messageinit,
    gasLimit: 899819245,
    value: 0,
  };

  const signer = async () => {
    const localaccount = account?.address;
    const isVisibleAccount = accounts.some(
      (visibleAccount) => visibleAccount.address === localaccount
    );

    if (isVisibleAccount) {
      // Create a message extrinsic
      const extrinsic = api.message.send(message, metadata);

      const injector = await web3FromSource(accounts[0].meta.source);

      extrinsic
        .signAndSend(
          accounts[0].address,
          { signer: injector.signer },
          ({ status }) => {
            if (status.isInBlock) {
              console.log(
                `Completed at block hash #${status.asInBlock.toString()}`
              );
              alert.success(`Block hash #${status.asInBlock.toString()}`);
            } else {
              console.log(`Current status: ${status.type}`);
              if (status.type === "Finalized") {
                alert.success(status.type);
              }
            }
          }
        )
        .catch((error: any) => {
          console.log(":( transaction failed", error);
        });
    } else {
      alert.error("Account not available to sign");
    }

    // Usermessagesent subscription
    const unsub = api.gearEvents.subscribeToGearEvent(
      "UserMessageSent",
      ({
        data: {
          message: { id, source, destination, payload, value },
        },
      }) => {
        console.log(`
      messageId: ${id.toHex()}
      source: ${source.toHex()}
      payload: ${payload.toHuman()}
      `);
      }
    );
  };

  return <Button text="Ping" onClick={signer} />;
}

export { Ping };
