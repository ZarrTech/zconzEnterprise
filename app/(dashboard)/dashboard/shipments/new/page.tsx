import { StatusStepper } from '@/ui';export default function Page(){return <div><h1>Create Shipment</h1><StatusStepper steps={['Addresses','Package','Summary/Pay']} current={0}/></div>}
