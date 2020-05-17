import { useState, useEffect } from 'react';

export enum EAlert {
  'INFO',
  'WARNING',
  'ERROR',
  'SUCCESS'
}

interface IAlert {
  type: EAlert;
  isOpen: boolean;
  message: string
}

export default () => {
  const [alert, setAlert] = useState<IAlert>({ type: EAlert.INFO, isOpen: false, message: '' })
  return { alert, setAlert }
}
