import React, { useState, useRef, useEffect } from 'react';
import './CustomDropdown.css'; 

const CustomDropdown = ({ options, value, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);  // Dropdown을 참조하는 ref

    const handleSelect = (optionValue) => {
        onChange(optionValue);
        setIsOpen(false);  // 선택 후 드롭다운 닫기
    };

    // 외부 클릭 감지
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);  // 외부 클릭 시 드롭다운 닫기
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);

    return (
        <div ref={dropdownRef} className={`custom-dropdown ${isOpen ? 'open' : ''}`}>
            <div
                className="custom-dropdown-header"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{options.find(option => option.value === value)?.label || 'Select an option'}</span>
                <span className={`dropdown-arrow ${isOpen ? 'open' : ''}`}></span> {/* 화살표 아이콘 */}
            </div>
            {isOpen && (
                <div className="custom-dropdown-options">
                    {options.map(option => (
                        <div
                            key={option.value}
                            className="custom-dropdown-option"
                            onClick={() => handleSelect(option.value)}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CustomDropdown;
