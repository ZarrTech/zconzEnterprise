import { StatusStepper } from '@/ui';export default function Page(){return <div><h1>Produce Checkout</h1><StatusStepper steps={['Delivery','Review','Payment']} current={0}/></div>}
