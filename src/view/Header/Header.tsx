import { CirclePlus } from "lucide-react";
import { useState, useEffect } from "react";
import { api } from "@/common/api";
import { useApi } from "@/hooks/useApi";
import type { AccountBalance } from "@/common/types";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useStore from "@/store";
import { makeId } from "@/common/utils";
import { Spinner } from "@/components/ui/spinner";

function Header() {
  const addCard = useStore((state) => state.addCard);
  const setAccountBalance = useStore((state) => state.setAccountBalance);
  const accountBalance = useStore((state) => state.accountBalance);
  const [formData, setFormData] = useState({
    cardName: "",
    cardNumber: "",
    expMonth: "",
    expYear: "",
    cvv: "",
    cardType: "visa" as const,
  });

  const { data: balanceData, isLoading: isFetching } = useApi<AccountBalance>(
    api.getAccountBalance
  );

  useEffect(() => {
    if (balanceData) {
      setAccountBalance(balanceData);
    }
  }, [balanceData, setAccountBalance]);

  const handleAddCard = () => {
    const card = {
      id: makeId(),
      cardNumber: formData.cardNumber,
      cardHolderName: formData.cardName,
      expMonth: formData.expMonth,
      expYear: formData.expYear,
      cvv: formData.cvv,
      cardType: formData.cardType,
    };
    addCard(card);
  };

  return (
    <header className='bg-sky-950 md:bg-white px-4 py-3 h-full w-full'>
      <div className='flex items-end justify-between w-full h-full'>
        <div className='flex items-center gap-4'>
          <div className='flex flex-col items-center gap-2 px-3 py-2 flex-1 max-w-md'>
            <p className='text-sm text-white md:text-black'>Account balance</p>
            <div className='flex items-center gap-2'>
              <span className='text-sm font-bold bg-green-500 text-white p-1 rounded'>
                S$
              </span>
              {isFetching ? (
                <Spinner />
              ) : (
                <p className='text-2xl font-bold text-white md:text-black'>
                  {accountBalance.availableBalance}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className='flex items-center gap-3'>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                size='lg'
                className='bg-sky-950 text-sky-300 md:text-white'
              >
                <CirclePlus /> New card
              </Button>
            </AlertDialogTrigger>

            <AlertDialogContent className='z-[9999]'>
              <AlertDialogHeader>
                <AlertDialogTitle>Add new card</AlertDialogTitle>
              </AlertDialogHeader>
              <div>
                <FieldGroup>
                  <FieldSet>
                    <FieldGroup>
                      <Field>
                        <FieldLabel htmlFor='checkout-7j9-card-name-43j'>
                          Name on Card
                        </FieldLabel>
                        <Input
                          id='checkout-7j9-card-name-43j'
                          placeholder='Evil Rabbit'
                          value={formData.cardName}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              cardName: e.target.value,
                            }))
                          }
                          required
                        />
                      </Field>
                      <Field>
                        <FieldLabel>Card Number</FieldLabel>
                        <Input
                          placeholder='1234 5678 9012 3456'
                          value={formData.cardNumber}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              cardNumber: e.target.value,
                            }))
                          }
                          required
                        />
                        <FieldDescription>
                          Enter your 16-digit card number
                        </FieldDescription>
                      </Field>
                      <div className='grid grid-cols-3 gap-4'>
                        <Field>
                          <FieldLabel>Month</FieldLabel>
                          <Select
                            value={formData.expMonth}
                            onValueChange={(value) =>
                              setFormData((prev) => ({
                                ...prev,
                                expMonth: value,
                              }))
                            }
                          >
                            <SelectTrigger id='checkout-exp-month-ts6'>
                              <SelectValue placeholder='MM' />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value='01'>01</SelectItem>
                              <SelectItem value='02'>02</SelectItem>
                              <SelectItem value='03'>03</SelectItem>
                              <SelectItem value='04'>04</SelectItem>
                              <SelectItem value='05'>05</SelectItem>
                              <SelectItem value='06'>06</SelectItem>
                              <SelectItem value='07'>07</SelectItem>
                              <SelectItem value='08'>08</SelectItem>
                              <SelectItem value='09'>09</SelectItem>
                              <SelectItem value='10'>10</SelectItem>
                              <SelectItem value='11'>11</SelectItem>
                              <SelectItem value='12'>12</SelectItem>
                            </SelectContent>
                          </Select>
                        </Field>
                        <Field>
                          <FieldLabel>Year</FieldLabel>
                          <Select
                            value={formData.expYear}
                            onValueChange={(value) =>
                              setFormData((prev) => ({
                                ...prev,
                                expYear: value,
                              }))
                            }
                          >
                            <SelectTrigger>
                              <SelectValue placeholder='YYYY' />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value='2024'>2024</SelectItem>
                              <SelectItem value='2025'>2025</SelectItem>
                              <SelectItem value='2026'>2026</SelectItem>
                              <SelectItem value='2027'>2027</SelectItem>
                              <SelectItem value='2028'>2028</SelectItem>
                              <SelectItem value='2029'>2029</SelectItem>
                              <SelectItem value='2030'>2030</SelectItem>
                            </SelectContent>
                          </Select>
                        </Field>
                        <Field>
                          <FieldLabel>CVV</FieldLabel>
                          <Input
                            placeholder='123'
                            value={formData.cvv}
                            onChange={(e) =>
                              setFormData((prev) => ({
                                ...prev,
                                cvv: e.target.value,
                              }))
                            }
                            required
                          />
                        </Field>
                      </div>
                    </FieldGroup>
                  </FieldSet>
                  <FieldSeparator />
                </FieldGroup>
              </div>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleAddCard}>
                  Add card
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </header>
  );
}

export default Header;
