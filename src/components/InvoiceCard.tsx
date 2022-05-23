import React, { useCallback } from "react";
import styled from "styled-components";

interface InvoiceCardProps {
  id: string;
  clientName: string;
  paymentDue: string;
  status: string;
  total: number;
}
const InvoiceCard = ({
  id,
  clientName,
  paymentDue,
  status,
  total,
}: InvoiceCardProps) => {
  const convertDate = useCallback((date: string) => {
    return new Intl.DateTimeFormat("en-US", {
      dateStyle: "full",
    }).format(new Date(date));
  }, []);
  const convertToMoneyFormat = useCallback((amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  }, []);
  const handleOrderStatusColor = useCallback((status: string) => {
    switch (status) {
      case "draft":
        return "draft";
      case "paid":
        return "paid";
      case "pending":
        return "pending";
      default:
        return "draft";
    }
  }, []);
  return (
    <S.InvoiceCardContainer>
      <h2 className="invoice-id">
        <span className="hashtag-text">#</span>
        {id}
      </h2>
      <h3 className="customer-name">{clientName}</h3>
      <h3 className="due-date">Due {convertDate(paymentDue)}</h3>
      <div className={`order-status ${handleOrderStatusColor(status)}`}>
        <div className={`order-circle ${handleOrderStatusColor(status)}`} />
        {status}
      </div>
      <h3 className="total-amount">{convertToMoneyFormat(total)}</h3>
    </S.InvoiceCardContainer>
  );
};

export default InvoiceCard;
const S = {
  InvoiceCardContainer: styled.div`
    max-width: 1200px;
    margin: 1rem auto;
    width: 90vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    align-items: center;
    border: 1px solid transparent;
    border-radius: 8px;
    padding: 1rem 1.5rem;
    background: ${({ theme }) => theme.background};
    text-decoration: none;
    .total-amount {
      font-size: 1rem;
      font-weight: bold;
    }
    .due-date,
    .invoice-id,
    .customer-name {
      font-size: 0.75rem;
    }
    .invoice-id {
      font-weight: bold;
      .hashtag-text {
        color: rgb(126, 136, 195);
      }
    }
    .customer-name {
      text-align: end;
      color: ${({ theme }) => theme.p};
    }
    .order-status {
      text-transform: capitalize;
      margin-left: auto;
      grid-row: span 2;
      width: 6.5rem;
      height: 2.5rem;
      border-radius: 6px;
      background: rgba(55, 59, 83, 0.06);
      display: flex;
      justify-content: center;
      align-items: center;
      /* add useCallback for status with ENUMS */
      &.draft {
        color: ${({ theme }) => theme.text};
        background: ${({ theme }) => theme.body};
      }
      &.paid {
        color: rgb(51, 214, 159);
        background: rgba(51, 214, 159, 0.06);
      }
      &.pending {
        color: rgb(255, 143, 0);
        background: rgba(255, 143, 0, 0.06);
      }
      .order-circle {
        display: inline-block;
        width: 0.5rem;
        height: 0.5rem;
        margin-right: 0.5rem;
        border-radius: 50%;
        background: rgb(55, 59, 83);
        &.draft {
          background: ${({ theme }) => theme.text};
        }
        &.paid {
          background: rgb(51, 214, 159);
        }
        &.pending {
          background: rgb(255, 143, 0);
        }
      }
    }
  `,
};
