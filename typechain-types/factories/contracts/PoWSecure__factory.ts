/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  PayableOverrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { PoWSecure, PoWSecureInterface } from "../../contracts/PoWSecure";

const _abi = [
  {
    inputs: [],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "originalAmount",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "newAmount",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "signer",
        type: "address",
      },
    ],
    name: "AmountUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "payee",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "Payed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "signer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bool",
        name: "newState",
        type: "bool",
      },
    ],
    name: "StateToggled",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "deprecate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getState",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "receiver",
        type: "address",
      },
    ],
    name: "pay",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "toggleState",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_newAmount",
        type: "uint256",
      },
    ],
    name: "updateAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x6080604052661aa535d3d0c00060015561002b61002061004b60201b60201c565b61005360201b60201c565b6001600260006101000a81548160ff021916908315150217905550610117565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b610c2a806101266000396000f3fe6080604052600436106100a05760003560e01c80633ccfd60b116100645780633ccfd60b1461015b578063715018a6146101725780638da5cb5b14610189578063d321fe29146101b4578063d37e5104146101df578063f2fde38b146101f6576100a7565b80630c11dedd146100a95780630fcc0c28146100c557806312065fe0146100dc5780631865c57d1461010757806334d6093d14610132576100a7565b366100a757005b005b6100c360048036038101906100be91906107cf565b61021f565b005b3480156100d157600080fd5b506100da61037d565b005b3480156100e857600080fd5b506100f16103a5565b6040516100fe91906109d3565b60405180910390f35b34801561011357600080fd5b5061011c6103ad565b6040516101299190610918565b60405180910390f35b34801561013e57600080fd5b50610159600480360381019061015491906107f8565b6103c4565b005b34801561016757600080fd5b5061017061046a565b005b34801561017e57600080fd5b506101876104c9565b005b34801561019557600080fd5b5061019e6104dd565b6040516101ab91906108fd565b60405180910390f35b3480156101c057600080fd5b506101c9610506565b6040516101d691906109d3565b60405180910390f35b3480156101eb57600080fd5b506101f4610510565b005b34801561020257600080fd5b5061021d600480360381019061021891906107a6565b610599565b005b600260009054906101000a900460ff1661026e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161026590610993565b60405180910390fd5b6000600154116102b3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102aa90610933565b60405180910390fd5b60008173ffffffffffffffffffffffffffffffffffffffff16319050600154811015610379576000816001546102e991906109ff565b90508273ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015610331573d6000803e3d6000fd5b5042818473ffffffffffffffffffffffffffffffffffffffff167fc4afcd8d38f903c1c3c8ab41a84f6df29cb7fb88e0d7121bc9633c15eb94af8660405160405180910390a4505b5050565b61038561061d565b61038d6104dd565b73ffffffffffffffffffffffffffffffffffffffff16ff5b600047905090565b6000600260009054906101000a900460ff16905090565b6103cc61061d565b600060015411610411576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610408906109b3565b60405180910390fd5b60006001549050816001819055503373ffffffffffffffffffffffffffffffffffffffff16600154827f32598843ebd8872cccdb9c21be935270ca4d457ae763774808d1b802e33f123360405160405180910390a45050565b61047261061d565b61047a6104dd565b73ffffffffffffffffffffffffffffffffffffffff166108fc61049b6103a5565b9081150290604051600060405180830381858888f193505050501580156104c6573d6000803e3d6000fd5b50565b6104d161061d565b6104db600061069b565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000600154905090565b61051861061d565b600260009054906101000a900460ff1615600260006101000a81548160ff021916908315150217905550600260009054906101000a900460ff1615153373ffffffffffffffffffffffffffffffffffffffff167f756dab92326c7665f3daa85a3340c845b6f4f0e1b22c4b75a15bce75ba7abe9a60405160405180910390a3565b6105a161061d565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610611576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060890610953565b60405180910390fd5b61061a8161069b565b50565b61062561075f565b73ffffffffffffffffffffffffffffffffffffffff166106436104dd565b73ffffffffffffffffffffffffffffffffffffffff1614610699576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161069090610973565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b60008135905061077681610baf565b92915050565b60008135905061078b81610bc6565b92915050565b6000813590506107a081610bdd565b92915050565b6000602082840312156107b857600080fd5b60006107c684828501610767565b91505092915050565b6000602082840312156107e157600080fd5b60006107ef8482850161077c565b91505092915050565b60006020828403121561080a57600080fd5b600061081884828501610791565b91505092915050565b61082a81610a33565b82525050565b61083981610a57565b82525050565b600061084c6019836109ee565b915061085782610abc565b602082019050919050565b600061086f6026836109ee565b915061087a82610ae5565b604082019050919050565b60006108926020836109ee565b915061089d82610b34565b602082019050919050565b60006108b5601d836109ee565b91506108c082610b5d565b602082019050919050565b60006108d86019836109ee565b91506108e382610b86565b602082019050919050565b6108f781610a83565b82525050565b60006020820190506109126000830184610821565b92915050565b600060208201905061092d6000830184610830565b92915050565b6000602082019050818103600083015261094c8161083f565b9050919050565b6000602082019050818103600083015261096c81610862565b9050919050565b6000602082019050818103600083015261098c81610885565b9050919050565b600060208201905081810360008301526109ac816108a8565b9050919050565b600060208201905081810360008301526109cc816108cb565b9050919050565b60006020820190506109e860008301846108ee565b92915050565b600082825260208201905092915050565b6000610a0a82610a83565b9150610a1583610a83565b925082821015610a2857610a27610a8d565b5b828203905092915050565b6000610a3e82610a63565b9050919050565b6000610a5082610a63565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f506f775365637572653a20496e76616c696420616d6f756e7400000000000000600082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f506f575365637572653a20436f6e747261637420697320506175736564000000600082015250565b7f506f775365637572653a20496e76616c696420416d6f756e7400000000000000600082015250565b610bb881610a33565b8114610bc357600080fd5b50565b610bcf81610a45565b8114610bda57600080fd5b50565b610be681610a83565b8114610bf157600080fd5b5056fea2646970667358221220b8f79891014adb5bef216f553d44e59afbe03c21ed650d8dfd1237542430bd9c64736f6c63430008040033";

type PoWSecureConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PoWSecureConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PoWSecure__factory extends ContractFactory {
  constructor(...args: PoWSecureConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<PoWSecure> {
    return super.deploy(overrides || {}) as Promise<PoWSecure>;
  }
  override getDeployTransaction(
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): PoWSecure {
    return super.attach(address) as PoWSecure;
  }
  override connect(signer: Signer): PoWSecure__factory {
    return super.connect(signer) as PoWSecure__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PoWSecureInterface {
    return new utils.Interface(_abi) as PoWSecureInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PoWSecure {
    return new Contract(address, _abi, signerOrProvider) as PoWSecure;
  }
}
