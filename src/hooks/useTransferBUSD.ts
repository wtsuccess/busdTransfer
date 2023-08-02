import { useCallback, useState } from "react";
import { Signer, ethers } from "ethers";
import { getMetamaskErrorMessage } from "../utils/metamask";
import { BUSDHandler__factory, BUSD__factory } from "../types";
import { BUSDContractAddress, BUSDHandlerAddress } from "../constants/basic";

interface TransactionStatus {
    status: 'Pending' | 'Failed' | 'Success',
    errMsg?: string
}

export const useTransferBUSD = () => {
    const [transactionStatus, setTransactionStatus] = useState<TransactionStatus>();

    const transferBUSD = useCallback(async (BUSDAmount: number, signer: Signer, receiver: string) => {
        setTransactionStatus({
          status: 'Pending'  
        });
        const busdHandler = BUSDHandler__factory.connect(BUSDHandlerAddress, signer);
        try {
            const busd = BUSD__factory.connect(BUSDContractAddress, signer);
            if ((await busd.allowance(await signer.getAddress(), BUSDHandlerAddress)).lt(ethers.utils.parseUnits(BUSDAmount + "", 18))) {
                await busd.approve(BUSDHandlerAddress, ethers.utils.parseEther(BUSDAmount + ""));
            }
            await busdHandler.deposit(receiver, ethers.utils.parseEther(BUSDAmount + ""));
            setTransactionStatus({
                status: 'Success'
            })
        } catch(err) {
            console.log("error while buying: ", err);
            setTransactionStatus({
                status: 'Failed',
                errMsg: getMetamaskErrorMessage(err),
            });
        }
    }, []);

    return {send: transferBUSD, state: transactionStatus};
}