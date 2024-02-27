import "./SidebarChannel.scss";
import { ReactNode } from "react";
import { Channel } from "./Sidebar";
import { useAppDispatch } from "@/lib/hooks";
import { setChannelInfo } from "@/lib/features/channelSlice";

type Props = {
  channelData: Channel
}

function SidebarChannel({ channelData }: Props) {
  const { id, name } = channelData;
  const dispatch = useAppDispatch();

  return (
    <div id={id} className='sidebarChannel' onClick={() => dispatch(setChannelInfo({
      channelId: id,
      channelName: name
    }))}>
      <h4 className='sidebarChannelName'>
        <span className='sidebarChannelHash'>#</span>{ name as ReactNode }
      </h4>
    </div>
  )
}

export default SidebarChannel