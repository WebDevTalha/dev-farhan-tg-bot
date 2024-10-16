import {
  MetaMaskButton,
  useAccount,
  useSDK,
  useSignMessage,
} from "@metamask/sdk-react-ui";
import React from "react";

function AppReady() {
  const {
    data: signData,
    isError: isSignError,
    isLoading: isSignLoading,
    isSuccess: isSignSuccess,
    signMessage,
  } = useSignMessage({
    message: "gm wagmi frens",
  });

  const { isConnected } = useAccount();

  return (
    <>
      <br />
      <br />
      <h1 className="text-4xl font-bold mb-8">MetaMask Connect Demo</h1>

      <div className="App">
        <header className="App-header">
          <MetaMaskButton theme={"dark"} color="white"></MetaMaskButton>
          {isConnected && (
            <>
              <div style={{ marginTop: 20 }}>
                <button disabled={isSignLoading} onClick={() => signMessage()}>
                  Sign message
                </button>
                {isSignSuccess && <div>Signature: {signData}</div>}
                {isSignError && <div>Error signing message</div>}
              </div>
            </>
          )}
        </header>
      </div>
    </>
  );
}

function ConnectBtn() {
  const { ready } = useSDK();

  if (!ready) {
    return <div>Loading...</div>;
  }

  return <AppReady />;
}

export default ConnectBtn;
