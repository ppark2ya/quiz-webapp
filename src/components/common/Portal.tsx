import { ReactNode, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';

interface IPortalProps {
  id: string;
  children: ReactNode;
}

function Portal({ id, children }: IPortalProps) {
  const [parentElement, cleanupParentElement] = useMemo(
    () => createParentElement(id),
    [],
  );

  useEffect(() => () => cleanupParentElement(), []);

  return createPortal(children, parentElement);
}

function createParentElement(id: string): [HTMLDivElement, () => void] {
  const rootElement = getRootElement(id);
  const parentElement = document.createElement('div');

  rootElement.appendChild(parentElement);

  function cleanupParentElement() {
    rootElement.removeChild(parentElement);
  }

  return [parentElement, cleanupParentElement];
}

function getRootElement(id: string) {
  const rootElement = document.getElementById(id);
  if (rootElement !== null) {
    return rootElement;
  }

  const nextRootElement = document.createElement('div');
  nextRootElement.setAttribute('id', id);
  document.body.appendChild(nextRootElement);

  return nextRootElement;
}

export default Portal;
