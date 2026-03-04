export const ActivityFeed=({items}:{items:string[]})=><div className='space-y-2'>{items.map((i,idx)=><div key={idx} className='p-3 bg-card2 rounded-card'>{i}</div>)}</div>;
