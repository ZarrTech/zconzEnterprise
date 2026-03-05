import { StatusStepper } from '@/ui';export default function Page(){return <div><h1>Create Crypto Ticket</h1><StatusStepper steps={['Asset','Payout','Review']} current={0}/></div>}
