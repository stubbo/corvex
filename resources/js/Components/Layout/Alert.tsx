import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {Component, ReactNode} from 'react';
import {
  faCheckCircle,
  faExclamationCircle,
  faExclamationTriangle,
} from '@fortawesome/free-solid-svg-icons';

export interface AlertProps {
  message: string;
  type?: 'error' | 'warning' | 'success';
  data?: string[];
}

const icons = {
  error: faExclamationTriangle,
  warning: faExclamationCircle,
  success: faCheckCircle,
};

export default class Alert extends Component<AlertProps> {
  render(): ReactNode {
    const {type, message, data} = this.props;
    let mainClass, svgClass, textClass, icon;

    switch (type) {
      case 'error':
        mainClass = 'bg-red-50 border-l-4 border-red-400 p-4 mb-3';
        svgClass = 'h-5 w-5 text-red-400';
        textClass = 'text-sm text-red-700';
        icon = icons['error'];
        break;
      case 'warning':
        mainClass = 'bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-3';
        svgClass = 'h-5 w-5 text-yellow-400';
        textClass = 'text-sm text-yellow-700';
        icon = icons['warning'];
        break;
      case 'success':
      default:
        mainClass = 'bg-green-50 border-l-4 border-green-400 p-4 mb-3';
        svgClass = 'h-5 w-5 text-green-400';
        textClass = 'text-sm text-green-700';
        icon = icons['success'];
        break;
    }

    return (
      <div className={mainClass}>
        <div className="flex">
          <div className="flex-shrink-0">
            <FontAwesomeIcon className={svgClass} icon={icon} />
          </div>
          <div className="ml-3">
            <div className={textClass}>
              {message}

              {data !== undefined && data.length > 0 && (
                <ul className="mb-0 list-disc mt-1">
                  {data.map((error, k) => (
                    <li key={k}>{error}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
