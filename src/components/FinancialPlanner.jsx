import React, { useState } from 'react';
import LoanAmountSlider from './LoanAmountSlider';
import SalarySlider from './SalarySlider';
import BranchSelect from './BranchSelect';
import CountryMultiSelect from './CountryMultiSelect';
import CollegeRankingMultiSelect from './CollegeRankingMultiSelect';
import CurrencySelect from './CurrencySelect';
import SavingsChart from './SavingsChart';
import SalaryIncrementChart from './SalaryIncrementChart';

const FinancialPlanner = () => {
    const [loanAmount, setLoanAmount] = useState(50);
    const [salary, setSalary] = useState(200000);
    const [branch, setBranch] = useState('');
    const [countries, setCountries] = useState([]);
    const [collegeRankings, setCollegeRankings] = useState([]);
    const [currency, setCurrency] = useState('');

    const calculateEstimatedSavings = () => {
        const years = [1, 2, 3, 4, 5];
        const savings = years.map(year => {
            return (salary * year) - (loanAmount * salary * 0.01);
        });
        return savings;
    };
    return (
        <div class="grid grid-cols-2 gap-10 p-10 items-center">
            <div className='flex flex-col gap-6'>
                <LoanAmountSlider value={loanAmount} onChange={setLoanAmount} />
                <SalarySlider value={salary} onChange={setSalary} />
                <BranchSelect value={branch} onChange={setBranch} />
                <CountryMultiSelect value={countries} onChange={setCountries} />
                <CollegeRankingMultiSelect value={collegeRankings} onChange={setCollegeRankings} />
                <CurrencySelect value={currency} onChange={setCurrency} />
            </div>
            <div>
                <SavingsChart data={calculateEstimatedSavings()} currency={currency} countries={countries} />
                <SalaryIncrementChart salary={salary} collegeRankings={collegeRankings} />
            </div>
        </div>
    );
};

export default FinancialPlanner;
