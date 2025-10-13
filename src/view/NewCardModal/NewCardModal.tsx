import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import {
  FieldGroup,
  FieldSet,
  Field,
  FieldLabel,
  FieldDescription,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import useStore from "@/store";
import { useState } from "react";
import { makeId } from "@/common/utils";

export default function NewCardModal() {
  const addCard = useStore((state) => state.addCard);
  const toggleBottomSheet = useStore((state) => state.toggleBottomSheet);

  const [formData, setFormData] = useState({
    cardName: "",
    cardNumber: "",
    expMonth: "",
    expYear: "",
    cvv: "",
    cardType: "visa" as const,
  });

  const handleAddCard = () => {
    toggleBottomSheet();
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
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          size='lg'
          className='bg-sky-950 text-sky-300 md:text-white'
          onClick={toggleBottomSheet}
        >
          <CirclePlus /> New card
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Add new card</AlertDialogTitle>
        </AlertDialogHeader>
        <div>
          <FieldGroup>
            <FieldSet>
              <FieldGroup>
                <Field>
                  <FieldLabel>Name on Card</FieldLabel>
                  <Input
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
                      <SelectTrigger>
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
          <AlertDialogCancel onClick={toggleBottomSheet}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction onClick={handleAddCard}>
            Add card
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
