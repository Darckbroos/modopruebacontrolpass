import * as React from 'react';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import DoorBackIcon from '@mui/icons-material/DoorBack';
import FenceIcon from '@mui/icons-material/Fence';

export class Icons extends React.Component {
  render() {
    const { name } = this.props;

    switch (name) {
      case 'door-back':
        return <DoorBackIcon />;
      case 'fence':
        return <FenceIcon />;
      case 'camera-alt':
        return <CameraAltIcon />;
      default:
        return null;
    }
  }
}